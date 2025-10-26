import { foodOrderModel } from "../../model/foodOrder-model.js";

export const getFoodOrderById = async (req, res) => {
  try {
    const getId = req.params.userId;
    const getOrder = await foodOrderModel
      .findById(getId)
      .populate("user")
      .populate("foodOrderItems.food");
    res.status(200).json(getOrder);
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching orders" });
  }
};
