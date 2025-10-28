import { foodModel } from "../../model/food-model.js";

export const getFoodByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const foods = await foodModel
      .find({ category: categoryId })
      .populate("category");

    if (!foods || foods.length === 0) {
      return res
        .status(404)
        .json({ message: "No foods found for this category." });
    }

    res.status(200).json(foods);
  } catch (error) {
    console.error("Error fetching foods by category:", error);
    res.status(500).json({ message: "Server error while fetching foods." });
  }
};
