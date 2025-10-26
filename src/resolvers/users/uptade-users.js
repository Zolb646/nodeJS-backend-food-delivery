import { userModel } from "../../model/user-model.js";

export const updateUser = async (req, res) => {
  try {
    const getId = req.params.userId;
    const user = req.body;

    const updatedUser = await userModel.findByIdAndUpdate(getId, user);

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
