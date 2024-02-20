const orderRepository = require('../repository/orderRepository');

exports.createOrder = async (productId, userId, amount, price, payment) => {
    await orderRepository.createOrder(productId, userId, amount, price, payment);
};

exports.findOrderHistory = async (userId) => {
    await orderRepository.findOrderHistory(userId);
};