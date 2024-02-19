const Product = require('../models/product');

exports.findProduct = (productId) => Product.findOne({
    where : {productId}, attributes : ['productId', 'name', 'description', 'price', 'image1', 'stock', 'mainCategory', 'subCategory']
});

exports.createProduct = (name, description, price, image1, stock, mainCategory, subCategory) => Product.create({
    name, description, price, image1, stock, mainCategory, subCategory
});

exports.findAllProducts = () => Product.findAll({});