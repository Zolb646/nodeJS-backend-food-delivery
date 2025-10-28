import { foodCategoryModel } from "../../model/foodCategory-model.js";
import jwt from "jsonwebtoken";

export const updateFoodCategory = async (req, res) => {
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

    const foodCatId = req.params.foodCategoryId;
    const { categoryName } = req.body;

    const updatedCat = await foodCategoryModel.findByIdAndUpdate(
      foodCatId,
      { categoryName },
      { new: true, runValidators: true }
    );

    if (!updatedCat) {
      return res.status(404).json({ message: "Category not found." });
    }

    res.status(200).json({
      message: "Category updated successfully (Admin access).",
      category: updatedCat,
    });
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ message: "Server error while updating category." });
  }
};
