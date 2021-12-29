"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyToken_routes_1 = require("./verifyToken.routes");
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const router = (0, express_1.Router)();
// Create a new Product
router.post("/", verifyToken_routes_1.verifyToken, product_controller_1.createProduct);
// Update a Product
router.put("/:id", verifyToken_routes_1.verifyTokenAndAuthorization, product_controller_1.updateProduct);
// Delete a Product
router.delete("/:id", verifyToken_routes_1.verifyTokenAndAuthorization, product_controller_1.deleteProduct);
// Get user's Products
router.get("/find/:userId", verifyToken_routes_1.verifyTokenAndAuthorization, product_controller_1.userProducts);
// Get all Products
router.get("/", verifyToken_routes_1.verifyTokenAndAdmin, product_controller_1.getAllProducts);
exports.default = router;
