const bcrypt = require('bcrypt');
const userRepository = require('../repository/userRepository');

exports.createUser = async (email, name, password, phone) => {
    const user = await userRepository.findUserByEmail(email);
    if(user){
        console.error('[userService] 유저 추가 실패');
        throw '이미 등록된 이메일입니다.';
    };
    const hash = await bcrypt.hash(password, 12);
    await userRepository.createUser(email, name, hash, phone);
};