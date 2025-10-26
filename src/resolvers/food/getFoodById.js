import { foodModel } from "../../model/food-model.js";

export const getFoodById = async (req, res) => {
  const categoryId = req.params.categoryId;
  const food = await foodModel.findById(categoryId);
  res.status(200).json(food);
};
