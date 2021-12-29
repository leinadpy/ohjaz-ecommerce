"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Product", productSchema);
