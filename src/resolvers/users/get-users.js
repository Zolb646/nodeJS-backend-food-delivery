import { userModel } from "../../model/user-model.js";

export const getUsers = async (req, res) => {
  const dbUSers = await userModel.find().populate({
    path: "orderedFoods",
    populate: {
      path: "foodOrderItems",
      populate: {
        path: "food",
        select: "foodName",
      },
    },
  });
  res.status(200).json(dbUSers);
};
