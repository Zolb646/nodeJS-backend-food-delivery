import express from "express";
import mongoose from "mongoose";
import { UsersRouter } from "./routes/users.js";
import { FoodRouter } from "./routes/foods.js";
import { FoodCategoryRouter } from "./routes/foodCategory.js";
import { FoodOrderRouter } from "./routes/foodOrder.js";

const app = express();
const PORT = 8000;

app.use(express.json());

app.use("/auth", UsersRouter);
app.use("/food", FoodRouter);
app.use("/food-category", FoodCategoryRouter);
app.use("/food-order", FoodOrderRouter);

mongoose
  .connect("mongodb+srv://zolb646:Zolb6461@cluster0.pgc5wgu.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
