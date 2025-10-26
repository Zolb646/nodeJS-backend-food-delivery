import { foodOrderModel } from "../../model/foodOrder-model.js";

export const deleteFoodOrder = async (req, res) => {
  try {
    const deleteId = req.params.foodOrderId;
    const deleteOrder = await foodOrderModel.findByIdAndDelete(deleteId);
    if (!deleteOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res
      .status(200)
      .json({ message: "Order deleted successfully", deleteOrder });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Server error while deleting order" });
  }
};
