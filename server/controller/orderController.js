const orderService = require('../service/orderService');
const response = require('../data/responseFrom');
const responseText = require('../data/responseString');

exports.createOrder = async (req, res, next) => {
    const {productId, amount, price, payment} = req.body;
    await orderService.createOrder(productId, req.user.userId, amount, price, payment)
        .then(() => res.status(200).json(response.responseFromMessage(responseText.response_text.success, responseText.order_message.create)))
        .catch(error => next(error));
}

exports.findOrderHistory = async (req, res, next) => {
    const userId = req.user.userId
    await orderService.findOrderHistory(userId)
        .then(() => res.status(200).json(response.responseFromMessage(responseText.response_text.success, responseText.order_message.get)))
        .catch(error => next(error));
}

// 여러 상품 데이터를 JSON으로 입력되면 const {createdAt} 대신 const {orderItemId}로 바꿔서 진행할 거 같음
// 여러 상품 한번에 주문할 때 orderItem에 product가 JSON으로 들어가지 못하면 orderItem 테이블의 createdAt, userId로 같이 주문한 내용 받아야 함
exports.findOrder = async (req, res, next) => {
    const {createdAt} = req.body;
    await orderService.findOrder(req.user.userId, createdAt)
        .then(() => res.status(200).json(response.responseFromMessage(responseText.response_text.success, responseText.order_message.get)))
        .catch(error => next(error));
}