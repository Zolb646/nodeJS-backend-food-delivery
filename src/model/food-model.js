import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FoodSchema = new Schema({
  id: ObjectId,
  foodName: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  category: { type: ObjectId, required: true, ref: "FoodCategory" },
  ingreidents: { type: [String] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
export const foodModel = mongoose.model("Food", FoodSchema);
