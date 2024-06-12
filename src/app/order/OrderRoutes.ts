import express from "express";
import { orderCollection } from "./OrderController";

const orderRouter = express.Router();

orderRouter.post('/api/orders', orderCollection.createOrder);
orderRouter.get('/api/orders',(req, res) => {
    if (req.query.email) {
      return orderCollection.searchOrder(req, res);
    } else {
      return orderCollection.getAllOrder(req, res);
    }
  });
// orderRouter.get('/api/orders?email', orderCollection.searchOrder)

export const ordersRouter = orderRouter; 