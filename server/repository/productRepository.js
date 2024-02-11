const Product = require('../models/product');

exports.getProduct = (name) => Product.findOne({
    where : {name}, attributes : ['productId', 'name', 'description', 'price', 'image1', 'stock', 'mainCategory', 'subCategory']
});

exports.createProduct = (name, description, price, image1, stock, mainCategory, subCategory) => Product.create({
    name, description, price, image1, stock, mainCategory, subCategory
});
