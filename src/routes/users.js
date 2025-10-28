import express from "express";
import { getUsers } from "../resolvers/users/get-users.js";
import { SignUpAuth } from "../resolvers/users/signUp-users.js.js";
import { updateUser } from "../resolvers/users/uptade-users.js";
import { deleteUser } from "../resolvers/users/delete-users.js";
import { signInAuth } from "../resolvers/users/signIn-users.js";

export const UsersRouter = express.Router();

UsersRouter.get("/refresh", getUsers);
UsersRouter.post("/sign-up", SignUpAuth);
UsersRouter.post("/sign-in", signInAuth);
UsersRouter.patch("/:userId", updateUser);
UsersRouter.delete("/:userId", deleteUser);
