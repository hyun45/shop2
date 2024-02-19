const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const authService = require('../service/authService');
const productController = require('../controller/productController');
const response = require('../data/responseFrom');
const responseText = require('../data/responseString');

router.use(bodyParser.json());

router.get('/', productController.findAllProducts);
router.get('/:productId', productController.findProduct);

router.use((req, res, next) => {
    next('Not found error');
});

router.use((req, res, next, error) => {
    res.status(500).json(response.responseFromData(responseText.response_text.fail, responseText.product_message.error, error));
});

module.exports = router;
