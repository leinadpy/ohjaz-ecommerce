import { Request, Response } from "express";
import Cart, { ICart } from "../models/cart";

export const createCart = async (req: Request, res: Response) => {
  const newCart: ICart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(201).json(savedCart);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const updateCart = async (req: Request, res: Response) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updatedCart);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteCart = async (req: Request, res: Response) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Cart has been deleted" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const userCart = async (req: Request, res: Response) => {
  try {
    const cart = await Cart.findOne({ user: req.params.userId });
    res.status(200).json(cart);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllCarts = async (req: Request, res: Response) => {
  try {
    const carts: ICart[] = await Cart.find();
    res.status(200).json(carts);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};