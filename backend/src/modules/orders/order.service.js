import { Order } from "./order.model.js";
export const createOrder = async (orderData) => {
    try {
        const order = await Order.create(orderData);
        return order;
    } catch (error) {
        throw error;
    }
};

export const getOrdersByUserId = async (userId) => {
    try {
        const orders = await Order.findAll({ where: { userId } });
        return orders;
    } catch (error) {
        throw error;
    }
};

export const updateOrderStatus = async (orderId, status) => {
    try {
        const order = await Order.findByPk(orderId);
        if (!order) {
            throw new Error("Order not found");
        }
        order.status = status;
        await order.save();
        return order;
    } catch (error) {
        throw error;
    }
};

export const deleteOrder = async (orderId) => {
    try {
        const order = await Order.findByPk(orderId);
        if (!order) {
            throw new Error("Order not found");
        }
        await order.destroy();
        return true;
    } catch (error) {
        throw error;
    }
};
export const getAllOrders = async () => {
    try {
        const orders = await Order.findAll();
        return orders;
    } catch (error) {
        throw error;
    }
};