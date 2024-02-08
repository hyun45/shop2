const passport = require('passport');
const strategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const userRepository = require('../repository/userRepository');

module.exports = () => {
    passport.use(new strategy({
        usernameField : 'email',
        passwordField : 'password'
    }, async (email, password, done) => {
        try{
            const user = await userRepository.findUserByEmail(email);
            if(user && bcrypt.compare(password, user.password)){
                done(null, user);
            } else {
                done(null, false, user ? '비밀번호가 일치하지 않습니다.' : '가입되지 않은 회원입니다.');
            };
        } catch(error){
            done(error);
        };
    }));
};