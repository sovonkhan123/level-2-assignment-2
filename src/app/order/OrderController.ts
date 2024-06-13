
import { Request, Response } from "express";
import { orderServices } from "./OrderService";
import orderValidationSchema from './OrderValidation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const zodParseData = orderValidationSchema.parse(order);
    const result = await orderServices.createOrderIntoDB(zodParseData);
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

const searchOrder = async(req: Request, res: Response) => {
    try{
        const {email} = req.query;
        if (!email) {
          return res.status(400).json({
            success: false,
            message: "searchTerm query parameter is required",
          });
        }
        const result = await orderServices.searchOrderFromDB(email as string);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully for user email!",
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
  searchOrder
};
