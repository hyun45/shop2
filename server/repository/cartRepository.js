const CartItem = require('../models/cartItem');

exports.getCartItem = (productId, userId) => CartItem.findOne({where : {productId, userId}});

exports.updateCartItemAmount = async (productId, userId, addAmount) => {
    const cartItem = await CartItem.findOne({where : {productId, userId}});
    
    if(!cartItem){
        throw new Error('상품 없음');
    };

    const newAmount = cartItem.amount + addAmount;

    return CartItem.update({amount : newAmount}, {where : {productId, userId}});
};

exports.addCart = (productId, userId, amount) => CartItem.create({productId : productId, userId : userId, amount : amount});

exports.getCart = (userId) => CartItem.findAll({where : {userId}});