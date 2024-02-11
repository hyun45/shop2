const productRepository = require('../repository/productRepository');

exports.createProduct = async (name, description, price, image1, stock, mainCategory, subCategory) => {
    const product = await productRepository.getProduct(name);
    if(!product){
        console.error('[productService] 상품 추가 실패');
        throw `상품 ${name}이/가 이미 존재합니다.`;
    };
    await productRepository.createProduct(name, description, price, image1, stock, mainCategory, subCategory);
};