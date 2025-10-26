import express from "express";
import { getFoodCategory } from "../resolvers/food-category/getFoodCategory.js";
import { createFoodCategory } from "../resolvers/food-category/createFoodCategory.js";
import { uptadeFoodCategory } from "../resolvers/food-category/uptadeFoodCategory.js";
import { deleteCategory } from "../resolvers/food-category/deleteFoodCategory.js";

export const FoodCategoryRouter = express.Router();

FoodCategoryRouter.get("/", getFoodCategory);
FoodCategoryRouter.post("/", createFoodCategory);
FoodCategoryRouter.patch("/:foodcategoryId", uptadeFoodCategory);
FoodCategoryRouter.delete("/:foodCategoryId", deleteCategory);
