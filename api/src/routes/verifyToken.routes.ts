import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import jwtSecret from "./../config/config";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader: any = req.headers.token;
  if (authHeader) {
    const token: string = authHeader.split(" ")[1];
    jwt.verify(token, jwtSecret.jwtSecret, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

export const verifyTokenAndAuthorization = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, () => {
    const user: any = req.user;
    if (user.id === req.params.id || user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

export const verifyTokenAndAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, () => {
    const user: any = req.user;
    if (user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};
