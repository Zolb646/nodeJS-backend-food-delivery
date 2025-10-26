import { foodModel } from "../../model/food-model.js";

export const uptadeFoodDetails = async (req, res) => {
  try {
    const foodId = req.params.foodId;
    const food = req.body;
    const uptadedFood = await foodModel.findByIdAndUpdate(foodId, food, {
      new: true,
    });

    if (!uptadedFood) {
      return res.status(404).send("User not found");
    }

    res.status(200).json({ message: "food uptaded", food: uptadedFood });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error while updating food");
  }
};
