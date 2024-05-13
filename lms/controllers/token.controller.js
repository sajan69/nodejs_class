const jwt = require('jsonwebtoken');
const moment = require('moment');

const createToken = (userId,expiresIn,type,secret)=>{
    const payload = {
        sub: userId,
        iat: moment().unix(),
        expires: expiresIn,
        type : type,
    }
    return jwt.sign(payload, secret);
}

const generateAuthToken = (user) => {
    const accessExpires = moment().add(1,'minute');
    const accessToken = createToken(user.id, accessExpires, 'access', process.env.JWT_SECRET_KEY);

    const refreshExpires = moment().add(3, 'minutes');
    const refreshToken = createToken(user.id, refreshExpires, 'refresh', process.env.JWT_SECRET_KEY);

    return {
        token:{
            accessToken,
            refreshToken,
        }
    }
}

module.exports = {
    createToken,
    generateAuthToken,
}