import { Router, Request, Response } from "express";
const router = Router();

import passport from "passport";

router.get(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  (req: Request, res: Response) => {
    const user: any = req.user;
    user.isAdmin ? res.json(user) : res.status(403).json({ msg: "You are not an admin" });
  }
);

export default router;

/**
 * PROBAR LAS RUTAS DE ADMIN EN POSTMAN
 */
