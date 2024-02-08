const User = require('../models/user');

exports.findUserByEmail = (email) => User.findOne({where : {email}});

exports.createUser = (email, name, password, phone) => User.create({
    email, name, password, phone, userType: false
});

exports.getUserType = (email) => User.findOne({where : {email}, attributes : ['userType']});

exports.findAllUser = () => User.findAll({attributes : ['email', 'name', 'phone']});