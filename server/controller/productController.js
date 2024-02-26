const productService = require('../service/productService');
const response = require('../data/responseFrom');
const responseText = require('../data/responseString');

exports.createProduct = async (req, res, next) => {
    const {name, description, price, image1, stock, mainCategory, subCategory} = req.body;
    await productService.createProduct(name, description, price, image1, stock, mainCategory, subCategory)
        .then(() => res.status(200).json(response.responseFromMessage(responseText.response_text.success, responseText.product_message.create)))
        .catch(error => next(error));
};

exports.findAllProducts = async (req, res, next) => {
    await productService.findAllProducts()
        .then((product) => res.status(200).json((response.responseFromMessage(responseText.response_text.success, responseText.product_message.get))))
        .catch(error => next(error));
};

exports.findProduct = async (req, res, next) => {
    await productService.findProduct(req.params.productId)
    .then((product) => res.status(200).json((response.responseFromMessage(responseText.response_text.success, responseText.product_message.get, product))))
    .catch(error => next(error));
};

exports.findMainCateogryProducts = async (req, res, next) => {
    await productService.findMainCateogryProducts(req.params.mainCategory)
    .then((product) => res.status(200).json((response.responseFromMessage(responseText.response_text.success, responseText.product_message.get, product))))
    .catch(error => next(error));
};

exports.findSubCateogryProducts = async (req, res, next) => {
    await productService.findSubCateogryProducts(req.params.subCategory8)
    .then((product) => res.status(200).json((response.responseFromMessage(responseText.response_text.success, responseText.product_message.get, product))))
    .catch(error => next(error));
};

exports.updateProduct = async (req, res, next) => {
    const {productId, name, description, price, image1, stock, mainCategory, subCategory} = req.body;
    await productService.updateProduct(productId, name, description, price, image1, stock, mainCategory, subCategory)
        .then(() => res.status(200).json(response.responseFromMessage(responseText.response_text.success, responseText.product_message.update)))
        .catch(error => next(error));
};

exports.deleteProduct = async (req, res, next) => {
    const productId = req.params.productId;
    await productService.deleteProduct(productId)
        .then(() => res.status(200).json(response.responseFromMessage(responseText.response_text.success, responseText.product_message.delete)))
        .catch(error => next(error));
};