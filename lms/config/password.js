const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const UserModel = require('../models/user.model');

const jwtOptions = {
    secretOrKey: process.env.JWT_SECRET_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}

const verify = async (payload,done)