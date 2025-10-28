import { foodModel } from "../../model/food-model.js";
import jwt from "jsonwebtoken";

export const createFood = async (req, res) => {
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

    if (verified.role.toLowerCase() !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    const food = await foodModel.create({
      foodName: req.body.foodName,
      price: req.body.price,
      imageUrl: req.body.image,
      category: req.body.category,
      ingredients: req.body.ingredients,
    });

    res.status(201).json({
      message: "Food created successfully (Admin access).",
      food,
    });
  } catch (error) {
    console.error("Error creating food:", error);
    res.status(500).json({ message: "Server error while creating food." });
  }
};
