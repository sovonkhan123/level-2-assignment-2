import { order } from "./OrderInterface";
import { orderModel } from "./OrderModel"

const createOrderIntoDB = async (orderData: order) => {
    const result = await orderModel.create(orderData);
    return result
};

export const orderServices = {
    createOrderIntoDB,
}