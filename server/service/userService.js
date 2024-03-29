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

exports.findAllUser = async () => {
    const user = await userRepository.findAllUser();
    if(!user){
        console.error('[userService] 유저 정보 없음');
        throw '유저 정보 없음';
    };
    return user;
};

exports.findUser = async (userId) => {
    const user = await userRepository.findUser(userId);
    if(!user){
        throw `[userService] ${userId} 유저 정보 없음`;
    };
    return user;
};

exports.updateUser = async (email, phone) => {
    const user = await userRepository.findUserByEmail(email);
    if(!user){
        console.error('[userService] 유저 정보 업데이트 실패');
        throw ('Not updated');
    };
    await userRepository.updateUser(email, phone);
    console.log(`${email} 유저 정보 업데이트 완료`);
};

exports.deleteUser = async (userId) => {
    const result = await userRepository.deleteUser(userId);
    if(!result){
        console.error('[userService] 유저 정보 삭제 실패');
        throw ('Not delete');
    };
    console.log(`${userId} 유저 삭제 완료`);
};