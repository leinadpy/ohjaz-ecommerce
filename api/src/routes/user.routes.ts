import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "./verifyToken.routes";

import { Router } from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../controllers/user.controller";

const router = Router();

// Update a user
router.put("/:id", verifyTokenAndAuthorization, updateUser);

// Delete a user
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

// Get a user by id
router.get("/find/:id", verifyTokenAndAuthorization, getUser);

// Get all users
router.get("/", verifyTokenAndAdmin, getAllUsers);

export default router;
