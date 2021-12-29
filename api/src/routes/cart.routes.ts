import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "./verifyToken.routes";

import { Router } from "express";
import {
  createCart,
  deleteCart,
  getAllCarts,
  updateCart,
  userCart,
} from "../controllers/cart.controller";

const router = Router();

// Create a new cart
router.post("/", verifyToken, createCart);

// Update a cart
router.put("/:id", verifyTokenAndAuthorization, updateCart);

// Delete a Cart
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

// Get user's cart
router.get("/find/:userId", verifyTokenAndAuthorization, userCart);

// Get all cart
router.get("/", verifyTokenAndAdmin, getAllCarts);

export default router;
