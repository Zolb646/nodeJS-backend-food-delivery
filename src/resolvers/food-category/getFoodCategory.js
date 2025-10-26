import { foodCategoryModel } from "../../model/foodCategory-model.js";

export const getFoodCategory = async (req, res) => {
  const dbusers = await foodCategoryModel.find();
  res.status(200).json(dbusers);
};
