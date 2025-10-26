import { foodModel } from "../../model/food-model.js";

export const uptadeFoodCategory = async (req, res) => {
  try {
    const foodCatId = req.params.foodCategoryId;
    const food = req.body;
    const uptadedCat = await foodModel.findByIdAndUpdate(foodCatId, {
      categoryName: food.categoryName,
    });

    if (!uptadedCat) {
      return res.status(404).send("User not found");
    }

    res.status(200).json({ message: "Category uptaded", Category: uptadedCat });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error while updating food");
  }
};
