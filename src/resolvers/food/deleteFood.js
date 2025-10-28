import { foodModel } from "../../model/food-model.js";
import jwt from "jsonwebtoken";

export const deleteFood = async (req, res) => {
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

    const deleteId = req.params.foodId;
    const deletedFood = await foodModel.findByIdAndDelete(deleteId);

    if (!deletedFood) {
      return res.status(404).json({ message: "Food not found." });
    }

    res.status(200).json({
      message: "Food deleted successfully (Admin access).",
      id: deleteId,
    });
  } catch (error) {
    console.error("Error deleting food:", error);
    res.status(500).json({ message: "Server error while deleting food." });
  }
};
