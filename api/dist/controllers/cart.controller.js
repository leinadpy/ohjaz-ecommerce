"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCarts = exports.userCart = exports.deleteCart = exports.updateCart = exports.createCart = void 0;
const cart_1 = __importDefault(require("../models/cart"));
const createCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newCart = new cart_1.default(req.body);
    try {
        const savedCart = yield newCart.save();
        res.status(201).json(savedCart);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.createCart = createCart;
const updateCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedCart = yield cart_1.default.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(201).json(updatedCart);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.updateCart = updateCart;
const deleteCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield cart_1.default.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "Cart has been deleted" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.deleteCart = deleteCart;
const userCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield cart_1.default.findOne({ user: req.params.userId });
        res.status(200).json(cart);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.userCart = userCart;
const getAllCarts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carts = yield cart_1.default.find();
        res.status(200).json(carts);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getAllCarts = getAllCarts;
