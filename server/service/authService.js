const response = require('../data/responseFrom');
const responseText = require('../data/responseString');

exports.isNotLoggedIn = async (req, res, next) => {
    if(!req.isAuthenticated()){
        next();
    } else {
        res.status(403).json(response.responseFromMessage(responseText.response_text.fail, responseText.auth_message.fail_is_not_login));
    };
};