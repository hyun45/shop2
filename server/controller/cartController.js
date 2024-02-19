const cartService = require('../service/cartService');
const response = require('../data/responseFrom');
const responseText = require('../data/responseString');

exports.addCart = async (req, res, next) => {
    const {productId, amount} = req.body;
    await cartService.addCart(productId, req.user.userId, amount)
        .then(() => res.status(200).json(response.responseFromMessage(responseText.response_text.success, responseText.cart_message.create)))
        .catch(error => next(error));
};

exports.allCartList = async (req, res, next) => {
    await cartService.getCart(req.user.userId)
        .then((cart) => res.status(200).json(response.responseFromData(responseText.response_text.success, responseText.cart_message.get, cart)))
        .catch(error => next(error));
};

exports.deleteCartList = async (req, res, next) => {
    await cartService.deleteCartList(req.params.cartItemId)
        .then((cart) => res.status(200).json(response.responseFromData(responseText.response_text.success, responseText.cart_message.delete, cart)))
        .catch(error => next(error));
};