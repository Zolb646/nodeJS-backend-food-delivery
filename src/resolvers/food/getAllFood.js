import { foodModel } from "../../model/food-model.js";

export const getAllFood = async (req, res) => {
  const dbUSers = await foodModel.find().populate("category");
  res.status(200).json(dbUSers);
};
