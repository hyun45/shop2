const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const userController = require('../controller/userController');
const authController = require('../controller/authController');
const authService = require('../service/authService');
const response = require('../data/responseFrom');
const responseText = require('../data/responseString');

router.use(bodyParser.json());

router.post('/signUp', userController.createUser);
router.get('/:userId', authService.isLoggedIn, authService.isPermissionIn, userController.findUser);
router.post('/updateUser', authService.isLoggedIn, authService.isPermissionIn, userController.updateUser);
router.get('/deleteUser/:userId', authService.isLoggedIn, authService.isPermissionIn, userController.deleteUser, authController.logout);

router.use((req, res, next) => {
    next('Not found error');
});

router.use((req, res, next, error) => {
    res.status(500).json(response.responseFromData(responseText.response_text.fail, responseText.user_message.error, error));
});

module.exports = router;