import { UserModel } from "../../model/user-model.js";
import jwt from "jsonwebtoken";

export const deleteUser = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1];

    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!verified) {
      return res.status(403).json({ message: "Invalid or expired token." });
    }

    const deleteId = req.params.userId;

    if (verified.id !== deleteId) {
      return res
        .status(403)
        .json({ message: "You can delete only your own account." });
    }

    const deletedUser = await UserModel.findByIdAndDelete(deleteId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({
      message: "User deleted successfully.",
      deletedUser,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server error while deleting user." });
  }
};
