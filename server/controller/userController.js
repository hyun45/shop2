const userService = require('../service/userService');
const response = require('../data/responseFrom');
const responseText = require('../data/responseString');

exports.createUser = async (req, res, next) => {
    const {email, name, password, phone} = req.body;
    await userService.createUser(email, name, password, phone)
        .then(() => res.status(200).json(response.responseFromMessage(responseText.response_text.success, responseText.user_message.create)))
        .catch(error => next(error));
};

exports.getUser = async (req, res, next) => {
    await userService.findAllUser()
        .then((user) => res.status(200).json(response.responseFromData(responseText.response_text.success, responseText.user_message.get, user)))
        .catch(error => next(error));
};

exports.findUser = async (req, res, next) => {
    await userService.getUser(req.params.userId)
        .then((user) => res.json(response.responseFromData(responseText.response_text.success, responseText.user_message.get, user)))
        .catch(error => next(error)); 
};