import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../../model/user-model.js";

export const signInAuth = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const accessToken = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "7d" }
    );

    user.accessToken = accessToken;
    await user.save();

    res.status(200).json({
      message: "Logged in successfully",
      user: { id: user._id, email: user.email, role: user.role },
      accessToken,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
