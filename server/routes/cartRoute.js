const express = require('express');
const router = express.Router();
const authService = require('../service/authService');
const cartController = require('../controller/cartController');
const response = require('../data/responseFrom');
const responseText = require('../data/responseString');

router.post('/addCart', authService.isLoggedIn, cartController.addCart);
router.get('/', authService.isLoggedIn, cartController.allCartList);
router.get('/delete/:cartItemId', authService.isLoggedIn, cartController.deleteCartList)    //  authService.isPermissionIn 추가해줘야 함

router.use((req, res, next) => {
    next('Not found error');
});

router.use((req, res, next, error) => {
    res.status(500).json(response.responseFromData(responseText.response_text.fail, responseText.cart_message.error, error));
});

module.exports = router;