const passport = require('passport');
const local = require('./local');
const userRepository = require('../repository/userRepository');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.email);
    });

    passport.deserializeUser((email, done) => {
        userRepository.findUserByEmail(email)
            .then(user => done(null, user))
            .catch(error => done(error));
    });

    local();
};
