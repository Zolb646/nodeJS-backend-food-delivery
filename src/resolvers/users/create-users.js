import { userModel } from "../../model/user-model.js";

export const createUser = async (req, res) => {
  const user = req.body;
  const auth = await userModel.create({
    email: user.email,
    password: user.password,
    phoneNumber: user.phoneNumber,
    address: user.address,
    ttl: user.date,
    isVerified: user.verify,
    role: user.role,
    orderedFoods: user.orderedFoods,
  });
  res.status(200).json(auth);
};
