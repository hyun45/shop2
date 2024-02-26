const productRepository = require('../repository/productRepository');

exports.createProduct = async (name, description, price, image1, stock, mainCategory, subCategory) => {
    const product = await productRepository.findProduct(name);
    if(product){
        console.error('[productService] 상품 추가 실패');
        throw `상품 ${name}이/가 이미 존재합니다.`;
    };
    await productRepository.createProduct(name, description, price, image1, stock, mainCategory, subCategory);
};

exports.findAllProducts = async () => {
    console.log('[productService] 상품 정보 요청');
    const product = await productRepository.findAllProducts()
    if(!product){
        console.error('[productService] 상품 정보 없음');
        throw '상품 정보 없음';
    };
    return product;
};

exports.findProduct = async (productId) => {
    const product = await productRepository.findProduct(productId);
    if(!product){
        console.error(`[productService] ${productId} 상품 정보 없음`);
        throw `${productId} 상품 정보 없음`;
    };
    return product;
};

exports.findMainCateogryProducts = async (mainCategory) => {
    const product = await productRepository.findMainCateogryProducts(mainCategory);
    if(!product){
        console.error(`[productService] ${mainCategory} 상품 정보 없음`);
        throw `${mainCategory} 상품 정보 없음`;
    };
    return product;
};

exports.findSubCateogryProducts = async (subCategory) => {
    const product = await productRepository.findSubCateogryProducts(subCategory);
    if(!product){
        console.error(`[productService] ${subCategory} 상품 정보 없음`);
        throw `${subCategory} 상품 정보 없음`;
    };
    return product;
};

exports.updateProduct = async (productId, name, description, price, image1, stock, mainCategory, subCategory) => {
    const product = await productRepository.updateProduct(productId, name, description, price, image1, stock, mainCategory, subCategory);
    if(!product){
        console.error(`[productService] ${productId} 상품 정보 업데이트 실패`);
        throw `${productId} 상품 정보 없음`;
    };
    console.log(`${productId} 상품 정보 없데이트 성공`);
};

exports.deleteProduct = async (productId) => {
    const product = await productRepository.deleteProduct(productId);
    if(!product){
        console.error(`[productService] ${productId} 상품 정보 삭제 실패`);
        throw `${productId} 상품 정보 없음`;
    };
    console.log(`${productId} 상품 정보 삭제 성공`);
};