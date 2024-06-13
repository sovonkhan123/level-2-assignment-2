
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

const searchOrderFromDB = async(email: string) => {
    const result = await orderModel.find({ email: new RegExp(email, 'i') });
    return result;
};


export const orderServices = {
    createOrderIntoDB,
    getAllOrderFromDB,
    searchOrderFromDB
}