import express from "express";
import { createFoodOrder } from "../resolvers/food-order/createFoodOrder.js";
import { getFoodOrder } from "../resolvers/food-order/getFoodOrder.js";
import { getFoodOrderById } from "../resolvers/food-order/getFoodOrderById.js";
import { uptadeFoodOrder } from "../resolvers/food-order/uptadeFoodOrder.js";
import { deleteFoodOrder } from "../resolvers/food-order/deleteFoodOrder.js";

export const FoodOrderRouter = express.Router();

FoodOrderRouter.post("/", createFoodOrder);
FoodOrderRouter.get("/", getFoodOrder);
FoodOrderRouter.get("/:userId", getFoodOrderById);
FoodOrderRouter.patch("/:foodOrderId", uptadeFoodOrder);
FoodOrderRouter.delete("/:foodOrderId", deleteFoodOrder);
