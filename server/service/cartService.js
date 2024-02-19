const cartRepository = require('../repository/cartRepository');
const productRepository = require('../repository/productRepository');

exports.addCart = async (productId, userId, amount) => {
    const cartItem = await cartRepository.getCartItem(productId, userId);

    if(cartItem){
        await cartRepository.updateCartItemAmount(productId, userId, amount);
    } else{
        const product = await productRepository.findProduct(productId);
        if(!product){
            console.error(`[cartService] 상품 추가 실패`);
            throw `상품(${productId})이 존재하지 않습니다.`;
        };
        await cartRepository.addCart(productId, userId, amount);
    };
};

exports.getCart = async (userId) => {
    const cart = await cartRepository.getCart(userId);
    if(!cart){
        console.error(`[cartService] ${userId} 정보 없음`);
        throw `${userId} 정보 없음`;
    };
    return cart;
};