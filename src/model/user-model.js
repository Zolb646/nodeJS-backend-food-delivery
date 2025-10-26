import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  id: ObjectId,
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  address: { type: String },
  ttl: { type: Date },
  isVerified: { type: Boolean, default: false },
  role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
  orderedFoods: [{ type: ObjectId, ref: "FoodOrder" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
export const userModel = mongoose.model("User", UserSchema);
