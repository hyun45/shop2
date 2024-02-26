const Product = require('../models/product');

exports.findProduct = (productId) => Product.findOne({
    where : {productId}, attributes : ['productId', 'name', 'description', 'price', 'image1', 'stock', 'mainCategory', 'subCategory']
});

exports.createProduct = (name, description, price, image1, stock, mainCategory, subCategory) => Product.create({
    name, description, price, image1, stock, mainCategory, subCategory
});

exports.findAllProducts = () => Product.findAll({});

exports.findMainCateogryProducts = (mainCategory) => Product.findAll({where : {mainCategory}});

exports.findSubCateogryProducts = (subCategory) => Product.findAll({where : {subCategory}});

exports.updateProduct = (productId, name, description, price, image1, stock, mainCategory, subCategory) => Product.update({
    name, description, price, image1, stock, mainCategory, subCategory
}, {where : {productId}});

exports.deleteProduct = (productId) => Product.destroy({where : {productId}});