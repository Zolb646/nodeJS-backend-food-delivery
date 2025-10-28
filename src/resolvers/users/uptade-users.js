import { UserModel } from "../../model/user-model.js";
import jwt from "jsonwebtoken";

export const updateUser = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    const verifyToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!verifyToken) {
      return res.status(403).json({ message: "Invalid or expired token." });
    }

    const getId = req.params.userId;
    const user = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(getId, user, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error while updating user");
  }
};
