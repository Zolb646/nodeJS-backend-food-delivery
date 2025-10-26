import { foodModel } from "../../model/food-model.js";

export const createFood = async (req, res) => {
  const user = await foodModel.create({
    foodName: req.body.foodName,
    price: req.body.price,
    imageUrl: req.body.image,
    category: req.body.category,
    ingreidents: req.body.ingreidents,
  });
  res.status(200).json(user);
};
