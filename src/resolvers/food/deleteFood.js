import { foodModel } from "../../model/food-model.js";

export const deleteFood = async (req, res) => {
  const deleteId = req.params.foodId;
  console.log(deleteId);
  await foodModel.findByIdAndDelete(deleteId);

  res.status(200).json({ message: "Food deleted successfully", id: deleteId });
};
