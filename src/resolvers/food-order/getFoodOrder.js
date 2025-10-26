import { foodOrderModel } from "../../model/foodOrder-model.js";

export const getFoodOrder = async (req, res) => {
  try {
    const dbusers = await foodOrderModel.find().populate([
      "user",
      {
        path: "user",
        populate: "orderedFoods",
      },
      "foodOrderItems.food",
    ]);
    res.status(200).json(dbusers);
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Server error while fetching orders" });
  }
};
