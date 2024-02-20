const express = require('express');
const router = express.Router();
const authService = require('../service/authService');
const orderController = require('../controller/orderController');
const response = require('../data/responseFrom');
const responseText = require('../data/responseString');

router.post('/', authService.isLoggedIn, orderController.createOrder);
router.get('/orderHistory', authService.isLoggedIn, orderController.findOrderHistory);

router.use((req, res, next) => {
    next('Not found error');
});

router.use((req, res, next, error) => {
    res.status(500).json(response.responseFromData(responseText.response_text.fail, responseText.order_message.error, error));
});

module.exports = router;    