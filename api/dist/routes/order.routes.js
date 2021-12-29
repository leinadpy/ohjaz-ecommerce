"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyToken_routes_1 = require("./verifyToken.routes");
const express_1 = require("express");
const order_controller_1 = require("../controllers/order.controller");
const router = (0, express_1.Router)();
// Create a new order
router.post("/", verifyToken_routes_1.verifyToken, order_controller_1.createOrder);
// Update a order
router.put("/:id", verifyToken_routes_1.verifyTokenAndAuthorization, order_controller_1.updateOrder);
// Delete a order
router.delete("/:id", verifyToken_routes_1.verifyTokenAndAuthorization, order_controller_1.deleteOrder);
// Get user's orders
router.get("/find/:userId", verifyToken_routes_1.verifyTokenAndAuthorization, order_controller_1.userOrders);
// Get all orders
router.get("/", verifyToken_routes_1.verifyTokenAndAdmin, order_controller_1.getAllOrders);
exports.default = router;
