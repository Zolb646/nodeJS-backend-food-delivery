import { foodOrderModel } from "../../model/foodOrder-model.js";
import jwt from "jsonwebtoken";

export const createFoodOrder = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1];

    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!verified) {
      return res.status(403).json({ message: "Invalid or expired token." });
    }

    const { foodOrderItems, status } = req.body;

    let totalPrice = 0;
    for (const item of foodOrderItems) {
      const food = await foodModel.findById(item.food);
      if (food) totalPrice += food.price * item.quantity;
    }

    const newOrder = await foodOrderModel.create({
      user: verified.id,
      foodOrderItems,
      totalPrice,
      status: status || "PENDING",
    });

    res.status(201).json({
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Server error while creating order" });
  }
};
