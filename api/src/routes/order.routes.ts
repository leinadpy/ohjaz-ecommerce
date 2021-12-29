import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "./verifyToken.routes";

import { Router } from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  updateOrder,
  userOrders,
} from "../controllers/order.controller";

const router = Router();

// Create a new order
router.post("/", verifyToken, createOrder);

// Update a order
router.put("/:id", verifyTokenAndAuthorization, updateOrder);

// Delete a order
router.delete("/:id", verifyTokenAndAuthorization, deleteOrder);

// Get user's orders
router.get("/find/:userId", verifyTokenAndAuthorization, userOrders);

// Get all orders
router.get("/", verifyTokenAndAdmin, getAllOrders);

export default router;
