import { Request } from 'express';
import { order } from "./OrderInterface";
import { orderModel } from "./OrderModel"

const createOrderIntoDB = async (orderData: order) => {
    const result = await orderModel.create(orderData);
    return result;
};

const getAllOrderFromDB = async() => {
    const result = await orderModel.find();
    return result;
};

const getOrderFromDB = async(id: String) => {
    const result = await orderModel.findOne({id});
    return result;
};


export const orderServices = {
    createOrderIntoDB,
    getAllOrderFromDB,
    getOrderFromDB
}