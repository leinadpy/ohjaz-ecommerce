import { model, Schema, Document } from "mongoose";

export interface ICart extends Document {
  userId: string;
  products: [IProduct];
}

interface IProduct {
  productId: string;
  quantity: number;
}

const cartSchema = new Schema(
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
  },
  { timestamps: true }
);

export default model<ICart>("Cart", cartSchema);
