import { foodOrderModel } from "../../model/foodOrder-model.js";

export const uptadeFoodOrder = async (req, res) => {
  try {
    const getId = req.params.foodOrderId;
    const getOrder = req.body;
    const foodOrder = await foodOrderModel.findByIdAndUpdate(getId, getOrder);
    if (!foodOrder) return res.status(404).json({ message: "Order not found" });
    res.status(200).json({ message: "food order uptaded", Order: foodOrder });
  } catch (error) {
    res.status(500).json({ message: "Server error while updating order" });
  }
};
