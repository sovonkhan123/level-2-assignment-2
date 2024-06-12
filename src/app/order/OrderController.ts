import { order } from './OrderInterface';
import { Request, Response, response } from "express";
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


const getAllOrder = async(req: Request, res: Response) => {
    try{
        const result = await orderServices.getAllOrderFromDB();
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result
        })
    }catch(err: any){
        res.status(500).json({
            success: false,
            message: err.message || "something went wrong",
            data: err
        })
    }
}

const getOrder = async(req: Request, res: Response) => {
    try{
        const {orderId} = req.params
        const result = await orderServices.getOrderFromDB(orderId);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result
        })
    }catch(err: any){
        res.status(500).json({
            success: false,
            message: err.message || "something went wrong",
            data: err
        })
    }
}
export const orderCollection = {
  createOrder,
  getAllOrder,
  getOrder
};
