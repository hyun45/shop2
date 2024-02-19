const response = require('../data/responseFrom');
const responseText = require('../data/responseString');
const userRepository = require('../repository/userRepository');

exports.isNotLoggedIn = async (req, res, next) => {
    if(!req.isAuthenticated()){
        next();
    } else {
        res.status(403).json(response.responseFromMessage(responseText.response_text.fail, responseText.auth_message.fail_is_not_login));
    };
};

exports.isLoggedIn = async (req, res, next) => {
    if(req.isAuthenticated()){
        next();
    } else{
        res.status(403).json(response.responseFromMessage(responseText.response_text.fail, responseText.auth_message.fail_is_login));
    };
};

exports.isAdminIn = async (req, res, next) => {
    const user = await userRepository.getUserType(req.user.email);
    if(user.userType){
        next();
    } else{
        res.status(403).json(response.responseFromMessage(responseText.response_text.fail, responseText.auth_message.fail_not_permission));
    };
};

exports.isPermissionIn = async (req, res, next) => {
    const user = await userRepository.getUserType(req.user.email);
    console.log(req.user.userId);
    console.log(req.body.userId);
    console.log(req.params.userId);
    console.log(req.params)
    if(user.userType || (req.user.userId == req.params.userId) || (req.body.userId == req.user.userId)){
        next();
    } else{
        res.status(403).json(response.responseFromMessage(responseText.response_text.fail, responseText.auth_message.fail_not_permission));
    };
};