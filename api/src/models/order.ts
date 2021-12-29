import { model, Schema, Document } from "mongoose";

export interface IOrder extends Document {
  userId: string;
  products: [IProduct];
  amount: number;
  address: object;
  status: string;
}

interface IProduct {
  productId: string;
  quantity: number;
}

const orderSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default model<IOrder>("Order", orderSchema);
