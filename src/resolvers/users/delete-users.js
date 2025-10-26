import { userModel } from "../../model/user-model.js";

export const deleteUser = async (req, res) => {
  const deleteId = req.params.userId;

  await userModel.findByIdAndDelete(deleteId);

  res.status(200).json({ message: "User deleted successfully" });
};
