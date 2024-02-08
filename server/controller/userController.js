const userService = require('../service/userService');
const response = require('../data/responseFrom');
const responseText = require('../data/responseString');

exports.createUser = async (req, res, next) => {
    const {email, name, password, phone} = req.body;
    await userService.createUser(email, name, password, phone)
        .then(() => res.status(200).json(response.responseFromMessage(responseText.response_text.success, responseText.user_message.create)))
        .catch(error => next(error));
};