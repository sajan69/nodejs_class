const httpStatus = require('http-status');
const UserModel = require('../models/user.model');
const { generateAuthToken } = require('./token.controller');


const register = async(req,res) => {
    const {email} = req.body;
    if (await UserModel.isEmailAlreadyExist(email)){
        return res.status(httpStatus.CONFLICT).send('Email already taken');
    }
    const user = await UserModel.create(req.body);
    const userJson = user.toJSON();
    res.status(httpStatus.CREATED).send(userJson);
}

const login = async(req,res) => {
    try{
        const {email,password} = req.body;
        const user = await UserModel.findOne({ email });
        if (!user){
            return res.status(httpStatus.BAD_REQUEST).send('User not found');
        }
        
        if (!(await user.comparePassword(password))){
            return res.status(httpStatus.UNAUTHORIZED).send('Invalid password');
        }
        const token = generateAuthToken(user);
        const userJson = user.toJSON();
        console.log(token);
        res.status(httpStatus.OK).send({userJson,token});
    }
    catch(error){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }
}

const update = async(req,res) => {
    const {email} = req.body;
    const user = await UserModel.findOne({
        email,
    });
    if (!user){
        return res.status(httpStatus.NOT_FOUND).send('User not found');
    }
    await UserModel.updateOne({email},req.body);
    const updatedUser = await UserModel.findOne({email});
    const updatedUserJson = updatedUser.toJSON();
    res.status(httpStatus.OK).send(updatedUserJson);
}

module.exports = {
    register,
    login,
    update,
}
