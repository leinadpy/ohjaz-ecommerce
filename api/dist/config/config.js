"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jwtSecret: process.env.JWT_SECRET || "somesecrettoken",
    DB: {
        URI: process.env.MONGODB_URI,
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD,
        NAME: process.env.MONGODB_NAME,
    },
};