import bcrypt from "bcryptjs";
import { UserModel } from "../../model/user-model.js";
export const SignUpAuth = async (req, res) => {
  try {
    const { email, password, phoneNumber, address, ttl, role } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      role,
      ttl,
    });

    res.status(201).json({
      message: "User created successfully",
      user: { id: newUser._id, email: newUser.email, role: newUser.role },
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
