import express from "express";
import { orderCollection } from "./OrderController";

const orderRouter = express.Router();

orderRouter.post('/api/orders', orderCollection.createOrder);
orderRouter.get('/api/orders',orderCollection.getAllOrder);
orderRouter.get('')

export const ordersRouter = orderRouter; 