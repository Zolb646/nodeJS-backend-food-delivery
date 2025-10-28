import { foodCategoryModel } from "../../model/foodCategory-model.js";

export const getFoodCategory = async (req, res) => {
  try {
    const categories = await foodCategoryModel.find();
    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: "No food categories found." });
    }
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching food categories:", error);
    res
      .status(500)
      .json({ message: "Server error while fetching food categories." });
  }
};
