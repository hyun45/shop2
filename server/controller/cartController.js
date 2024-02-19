const cartService = require('../service/cartService');
const response = require('../data/responseFrom');
const responseText = require('../data/responseString');

exports.addCart = async (req, res, next) => {
    const {productId, amount} = req.body;
    await cartService.addCart(productId, req.user.userId, amount)
        .then()
}