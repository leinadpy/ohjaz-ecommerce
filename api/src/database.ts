import mongoose from "mongoose";

import config from "./config/config";

const URI_DB = `${config.DB.URI}${config.DB.USER}:${config.DB.PASSWORD}@cluster0.1ekye.mongodb.net/${config.DB.NAME}?retryWrites=true&w=majority`;

mongoose.connect(URI_DB);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection stablished");
});

connection.on("error", (err) => {
  console.log(err);
  process.exit(0);
});
