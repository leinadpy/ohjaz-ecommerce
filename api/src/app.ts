import express from "express";
import morgan from "morgan";
import cors from "cors";
import passport from "passport";
import passportMiddleware from "./middlewares/passport";

import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import cartRoutes from "./routes/cart.routes";
import productRoutes from "./routes/product.routes";
import orderRoutes from "./routes/order.routes";
import specialRoutes from "./routes/special.routes";
import adminRoutes from "./routes/admin.routes";

// initializations
const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

// routes
app.get("/", (req, res) => {
  res.send(`The API is at http://localhost:${app.get("port")}/api/`);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/specials", specialRoutes);
app.use("/api/admin", adminRoutes);

export default app;
