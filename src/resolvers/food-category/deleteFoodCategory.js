import { foodCategoryModel } from "../../model/foodCategory-model.js";

export const deleteCategory = async (req, res) => {
  const deleteId = req.params.foodCategoryId;
  await foodCategoryModel.findByIdAndDelete(deleteId);
  res
    .status(200)
    .json({ message: "Category deleted successfully", id: deleteId });
};
