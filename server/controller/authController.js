const passport = require('passport');
const response = require('../data/responseFrom');
const responseText = require('../data/responseString');

exports.login = (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if(authError){
            return next(authError);
        };

        if(!user){
            return res.status(401).json(response.responseFromMessage(responseText.response_text.fail, responseText.auth_message.fail));
        };

        req.login(user, (loginError) => {
            if(loginError){
                return next(loginError);
            };

            return res.status(200).json(response.responseFromData(responseText.response_text.success, responseText.auth_message.success, {
                userInfo : {
                    userId : user.userId,
                    userEmail : user.email,
                    userName : user.name,
                    userPhone : user.phone
                }
            }));
        });
    })(req, res, next);
};