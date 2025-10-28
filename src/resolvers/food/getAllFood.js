import { foodModel } from "../../model/food-model.js";

export const getAllFood = async (req, res) => {
  try {
    const foods = await foodModel.find().populate("category");
    if (!foods || foods.length === 0) {
      return res.status(404).json({ message: "No food items found." });
    }
    res.status(200).json(foods);
  } catch (error) {
    console.error("Error fetching food items:", error);
    res
      .status(500)
      .json({ message: "Server error while fetching food items." });
  }
};
