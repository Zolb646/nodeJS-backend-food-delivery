import { foodOrderModel } from "../../model/foodOrder-model.js";

export const createFoodOrder = async (req, res) => {
  try {
    const foodOrder = req.body;
    const foodOrders = await foodOrderModel.create({
      user: foodOrder.user,
      totalPrice: foodOrder.totalPrice,
      foodOrderItems: foodOrder.foodOrderItems,
      status: foodOrder.status,
    });
    res
      .status(200)
      .json({ message: "added order successfully", order: foodOrders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while creating order" });
  }
};
