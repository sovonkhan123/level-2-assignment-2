import express from "express";
import { orderCollection } from "./OrderController";

const orderRouter = express.Router();

orderRouter.post('/api/orders', orderCollection.createOrder);

export const ordersRouter = orderRouter; 