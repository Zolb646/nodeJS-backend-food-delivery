import express from "express";
import { getAllFood } from "../resolvers/food/getAllFood.js";
import { deleteFood } from "../resolvers/food/deleteFood.js";
import { createFood } from "../resolvers/food/createFood.js";
import { getFoodByCategory } from "../resolvers/food/getFoodByCategory.js";
import { updateFoodDetails } from "../resolvers/food/updateFoodDetails.js";

export const FoodRouter = express.Router();

FoodRouter.get("/:categoryId", getFoodByCategory);
FoodRouter.get("/", getAllFood);
FoodRouter.post("/", createFood);
FoodRouter.patch("/:foodId", updateFoodDetails);
FoodRouter.delete("/:foodId", deleteFood);
