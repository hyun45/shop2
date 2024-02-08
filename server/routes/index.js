const express = require('express');
const indexController = require('../controller/indexController');
const response = require('../data/responseFrom');
const resText = require('../data/responseString');

const router = express.Router();

router.get('/', indexController.index);

router.use((err, req, res, next) => {
    res.status(500).json(response.responseFromData(resText.response_text.fail, resText.index_message.error, err));
});

module.exports = router;