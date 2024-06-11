import { Schema, model } from "mongoose";
import { order } from "./OrderInterface";

const orderSchema = new Schema<order>({
  email: { type: String },
  productId: { type: String },
  price: String,
  quantity: String,
});

export const orderModel = model<order>('order', orderSchema);
