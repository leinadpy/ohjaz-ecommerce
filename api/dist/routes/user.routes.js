"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyToken_routes_1 = require("./verifyToken.routes");
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
// Update a user
router.put("/:id", verifyToken_routes_1.verifyTokenAndAuthorization, user_controller_1.updateUser);
// Delete a user
router.delete("/:id", verifyToken_routes_1.verifyTokenAndAuthorization, user_controller_1.deleteUser);
// Get a user by id
router.get("/find/:id", verifyToken_routes_1.verifyTokenAndAuthorization, user_controller_1.getUser);
// Get all users
router.get("/", verifyToken_routes_1.verifyTokenAndAdmin, user_controller_1.getAllUsers);
exports.default = router;
