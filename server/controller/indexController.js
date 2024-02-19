const userService = require('../service/userService');
const productService = require('../service/productService');
const response = require('../data/responseFrom');
const responseText = require('../data/responseString');

exports.index = async (req, res) => res.status(200).send('<h1>테스트</h1>');

exports.userIndex = async (req, res, next) => {
    await userService.findAllUser()
        .then((users) => res.status(200).json(response.responseFromData(responseText.response_text.success, responseText.user_message.get, users)))
        .catch(error => {
            console.error(error);
            next(error);
        });
};

exports.productsIndex = async (req, res, next) => {
    await productService.allProduct()
        .then((products) => res.status(200).json(response.responseFromData(responseText.response_text.success, responseText.product_message.get, products)))
        .catch(error => {
            console.error(error);
            next(error);
        });
};