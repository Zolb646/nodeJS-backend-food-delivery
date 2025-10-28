import express from "express";
import { getFoodCategory } from "../resolvers/food-category/getFoodCategory.js";
import { createFoodCategory } from "../resolvers/food-category/createFoodCategory.js";
import { deleteCategory } from "../resolvers/food-category/deleteFoodCategory.js";
import { updateFoodCategory } from "../resolvers/food-category/updateFoodCategory.js";

export const FoodCategoryRouter = express.Router();

FoodCategoryRouter.get("/", getFoodCategory);
FoodCategoryRouter.post("/", createFoodCategory);
FoodCategoryRouter.patch("/:foodcategoryId", updateFoodCategory);
FoodCategoryRouter.delete("/:foodCategoryId", deleteCategory);
