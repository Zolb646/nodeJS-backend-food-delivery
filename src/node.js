import express from "express";
import dotenv from "dotenv";
import { UsersRouter } from "./routes/users.js";
import { FoodRouter } from "./routes/foods.js";
import { FoodCategoryRouter } from "./routes/foodCategory.js";
import { FoodOrderRouter } from "./routes/foodOrder.js";
import { connectDB } from "./config/connectDB.js";

dotenv.config({ path: ".env.local" });
const app = express();
const PORT = 8000;

app.use(express.json());

app.use("/auth", UsersRouter);
app.use("/food", FoodRouter);
app.use("/food-category", FoodCategoryRouter);
app.use("/food-order", FoodOrderRouter);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
