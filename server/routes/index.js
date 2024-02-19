const express = require('express');
const indexController = require('../controller/indexController');
const authService = require('../service/authService');
const response = require('../data/responseFrom');
const responseText = require('../data/responseString');

const router = express.Router();

router.get('/', indexController.index);
router.get('/user', authService.isLoggedIn, authService.isAdminIn, indexController.userIndex)
router.get('/admin', authService.isAdminIn);

router.use((error, req, res, next) => {
    res.status(500).json(response.responseFromData(responseText.response_text.fail, responseText.index_message.error, error));
});

module.exports = router;