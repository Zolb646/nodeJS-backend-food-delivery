import express from "express";
import { getAllFood } from "../resolvers/food/getAllFood.js";
import { getFoodById } from "../resolvers/food/getFoodById.js";
import { uptadeFoodDetails } from "../resolvers/food/uptadeFoodDetails.js";
import { deleteFood } from "../resolvers/food/deleteFood.js";
import { createFood } from "../resolvers/food/createFood.js";

export const FoodRouter = express.Router();

FoodRouter.get("/:categoryId", getFoodById);
FoodRouter.get("/", getAllFood);
FoodRouter.post("/", createFood);
FoodRouter.patch("/:foodId", uptadeFoodDetails);
FoodRouter.delete("/:foodId", deleteFood);
