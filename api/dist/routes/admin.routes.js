"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const passport_1 = __importDefault(require("passport"));
router.get("/admin", passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    const user = req.user;
    user.isAdmin ? res.json(user) : res.status(403).json({ msg: "You are not an admin" });
});
exports.default = router;
/**
 * PROBAR LAS RUTAS DE ADMIN EN POSTMAN
 */
