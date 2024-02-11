const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const authService = require('../service/authService');
const productController = require('../controller/productController');
const response = require('../data/responseFrom');
const responseText = require('../data/responseString');
const multer = require('multer');

router.use(bodyParser.json());

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, 'upload/');
    }, filename : function(req, file, cb){
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({storage : storage});

router.post('/createProduct', authService.isLoggedIn, authService.isAdminIn, productController.createProduct);
router.post('/image', upload.single('image'), (req, res) => {
    const imagePath = req.file.path;
    res.json({imagePath});
});

router.use((req, res, next) => {
    next('Not found error');
});

router.use((req, res, next, error) => {
    res.status(500).json(response.responseFromData(responseText.response_text.fail, responseText.product_message.error, error));
});

module.exports = router;