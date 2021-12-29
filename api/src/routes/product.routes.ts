import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "./verifyToken.routes";

import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
  userProducts,
} from "../controllers/product.controller";

const router = Router();

// Create a new Product
router.post("/", verifyToken, createProduct);

// Update a Product
router.put("/:id", verifyTokenAndAuthorization, updateProduct);

// Delete a Product
router.delete("/:id", verifyTokenAndAuthorization, deleteProduct);

// Get user's Products
router.get("/find/:userId", verifyTokenAndAuthorization, userProducts);

// Get all Products
router.get("/", verifyTokenAndAdmin, getAllProducts);

export default router;
