"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config/config"));
const URI_DB = `${config_1.default.DB.URI}${config_1.default.DB.USER}:${config_1.default.DB.PASSWORD}@cluster0.1ekye.mongodb.net/${config_1.default.DB.NAME}?retryWrites=true&w=majority`;
mongoose_1.default.connect(URI_DB);
const connection = mongoose_1.default.connection;
connection.once("open", () => {
    console.log("MongoDB connection stablished");
});
connection.on("error", (err) => {
    console.log(err);
    process.exit(0);
});
