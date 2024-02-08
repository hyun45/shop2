const express = require('express');
const indexController = require('../controller/indexController');
const response = require('../data/responseFrom');
const responseText = require('../data/responseString');

const router = express.Router();

router.get('/', indexController.index);

router.use((err, req, res, next) => {
    res.status(500).json(response.responseFromData(responseText.response_text.fail, responseText.index_message.error, err));
});

module.exports = router;