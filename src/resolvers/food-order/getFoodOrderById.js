import { foodOrderModel } from "../../model/foodOrder-model.js";
import jwt from "jsonwebtoken";

export const getFoodOrderById = async (req, res) => {
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

    const getId = req.params.userId;
    if (verified.id !== getId) {
      return res.status(403).json({
        message: "Access denied. You can only access your own orders.",
      });
    }

    const getOrder = await foodOrderModel
      .find({ user: getId })
      .populate("user")
      .populate("foodOrderItems.food");

    if (!getOrder || getOrder.length === 0) {
      return res
        .status(404)
        .json({ message: "No orders found for this user." });
    }

    res.status(200).json({ orders: getOrder });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Server error while fetching orders." });
  }
};
