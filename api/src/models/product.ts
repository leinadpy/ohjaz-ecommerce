import { model, Schema, Document } from "mongoose";

export interface IProduct extends Document {
  title: string;
  description: string;
  img?: string;
  categories: string[];
  size?: string[];
  color?: string[];
  price: number;
  inStock: boolean;
}

const productSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default model<IProduct>("Product", productSchema);
