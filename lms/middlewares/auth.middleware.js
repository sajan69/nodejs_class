const httpStatus = require('http-status');
const { verifyToken } = require('../controllers/token.controller');
const UserModel = require('../models/user.model');
const moment = require('moment');

const auth = async (req, res, next) => {
    new Promise((resolve, reject) => passport.authenticate('jwt', { session: false } , (err, user, info) => {
        if (err|| info || !user) {
            return reject(new Error('Unauthorized'));
        }
        req.user = user;
        resolve();
    }))
    
        .then(() => next ())
        .catch(() => next(err));

}


// const auth = async (req, res, next) => {
    
//     const authorization = req.headers.authorization;
//     if (!authorization) {
//         return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Unauthorized , no authorization'});
//     }

//     const token = authorization.split(' ')[1];
//     if (!token) {
//         return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Unauthorized , no token'});
//     }
//     try {
//         const payload =verifyToken(token, process.env.JWT_SECRET_KEY);
//         if (!payload){
//             return res.status(httpStatus.UNAUTHORIZED).json({message:"Unauthorized invalid token"});
        
//         }

//         if (payload.type !== 'access'){
//             return res.status(httpStatus.UNAUTHORIZED).json({message:"Unauthorized invalid token type"});
//         }
//         if (!moment().isBefore(payload.expires)){
//             return res.status(httpStatus.UNAUTHORIZED).json({message:"Unauthorized token expired"});
//         }
//         const user = await UserModel.findById(payload.sub);
//         if (!user){
//             return res.status(httpStatus.UNAUTHORIZED).json({message:"Unauthorized invalid user"});
//         }

//         req.user = user;
//     } catch (error) {
//         next(error);
//     }

//     next();

// };

module.exports = auth;

