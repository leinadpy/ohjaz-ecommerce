import { Request, Response } from "express";
import Order, { IOrder } from "../models/order";

export const createOrder = async (req: Request, res: Response) => {
  const newOrder: IOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updatedOrder);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Order has been deleted" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const userOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders: IOrder[] = await Order.find();
    res.status(200).json(orders);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// export const monthlyIncome = async (req: Request, res: Response) => {
//   const productId = req.query.pid;
//   const date = new Date();
//   const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
//   const previousMonth = new Date(date.setMonth(date.getMonth() - 1));

//   try {
//     const income = await Order.aggregate([
//       {
//         $match: {
//           createdAt: { $gte: previousMonth },
//           ...(productId && {
//             products: { $elemMatch: { productId } },
//           }),
//         },
//       },
//       {
//         $project: {
//           month: { $month: "$createdAt" },
//           sales: "$amount",
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: "$sales" },
//         },
//       },
//     ]);
//     res.status(200).json(income);
//   } catch (err: any) {
//     res.status(500).json({ message: err.message });
//   }
// };
