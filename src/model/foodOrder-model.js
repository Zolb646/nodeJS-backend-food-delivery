import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FoodOrderItem = new Schema({
  food: { type: Schema.ObjectId, ref: "Food" },
  quantity: { type: Number },
});

const FoodOrderSchema = new Schema({
  id: ObjectId,
  user: { type: ObjectId, require: true, ref: "User" },
  foodOrderItems: [FoodOrderItem],
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
  },
  totalPrice: { type: Number, require: true },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

export const foodOrderModel = mongoose.model("FoodOrder", FoodOrderSchema);
