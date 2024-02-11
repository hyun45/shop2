const productService = require('../service/productService');
const response = require('../data/responseFrom');
const responseText = require('../data/responseString');

exports.createProduct = async (req, res, next) => {
    const {name, description, price, image1, stock, mainCategory, subCategory} = req.body;
    await productService.createProduct(name, description, price, image1, stock, mainCategory, subCategory)
        .then(() => res.status(200).json(response.responseFromMessage(responseText.response_text.success, responseText.product_message.create)))
        .catch(error => next(error));
};