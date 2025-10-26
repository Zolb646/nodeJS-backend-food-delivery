import { foodCategoryModel } from "../../model/foodCategory-model.js";

export const createFoodCategory = async (req, res) => {
  const foodCat = req.body;
  const foodCategory = await foodCategoryModel.create({
    categoryName: foodCat.categoryName,
  });
  res.status(200).json(foodCategory);
};
