import { Request, Response } from "express";
import { orderServices } from "./OrderService";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await orderServices.createOrderIntoDB(order);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",
      error: err,
    });
  }
};

export const orderCollection = {
  createOrder,
};