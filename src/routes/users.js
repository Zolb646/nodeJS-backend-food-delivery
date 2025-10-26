import express from "express";
import { getUsers } from "../resolvers/users/get-users.js";
import { createUser } from "../resolvers/users/create-users.js";
import { updateUser } from "../resolvers/users/uptade-users.js";
import { deleteUser } from "../resolvers/users/delete-users.js";

export const UsersRouter = express.Router();

UsersRouter.get("/", getUsers);
UsersRouter.post("/", createUser);
UsersRouter.patch("/:userId", updateUser);
UsersRouter.delete("/:userId", deleteUser);
