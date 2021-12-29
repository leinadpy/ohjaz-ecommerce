"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyToken_routes_1 = require("./verifyToken.routes");
const express_1 = require("express");
const cart_controller_1 = require("../controllers/cart.controller");
const router = (0, express_1.Router)();
// Create a new cart
router.post("/", verifyToken_routes_1.verifyToken, cart_controller_1.createCart);
// Update a cart
router.put("/:id", verifyToken_routes_1.verifyTokenAndAuthorization, cart_controller_1.updateCart);
// Delete a Cart
router.delete("/:id", verifyToken_routes_1.verifyTokenAndAuthorization, cart_controller_1.deleteCart);
// Get user's cart
router.get("/find/:userId", verifyToken_routes_1.verifyTokenAndAuthorization, cart_controller_1.userCart);
// Get all cart
router.get("/", verifyToken_routes_1.verifyTokenAndAdmin, cart_controller_1.getAllCarts);
exports.default = router;
