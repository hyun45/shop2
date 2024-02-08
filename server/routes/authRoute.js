const express = require('express');
const router = express.Router();
const response = require('../data/responseFrom');
const responseText = require('../data/responseString');
const authService = require('../service/authService');
const authController = require('../controller/authController');

router.post('/login', authService.isNotLoggedIn, authController.login);

router.use((req, res, next) => {
    next('Not found error');
});

router.use((req, res, next, error) => {
    res.status(500).json(response.responseFromData(responseText.response_text.fail, responseText.auth_message.fail, error));
});

module.exports = router;