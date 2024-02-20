const orderService = require('../service/orderService');
const response = require('../data/responseFrom');
const responseText = require('../data/responseString');

exports.createOrder = async (req, res, next) => {
    const {productId, amount, price, payment} = req.body;
    await orderService.createOrder(productId, req.user.userId, amount, price, payment)
        .then(() => res.status(200).json(response.responseFromMessage(responseText.response_text.success, responseText.order_message.create)))
        .catch(error => next(error));
}