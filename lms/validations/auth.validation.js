const Joi = require('joi');
const password = require('./custom/password');

const register = {
    body: Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().custom(password).required(),
        role: Joi.string().valid('admin', 'user', 'librarian').optional(),
        
    }),
    };

const login = {
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().custom(password).required(),
    }),
};

const update = {
    body: Joi.object({
        username: Joi.string().optional(),
        email: Joi.string().email().optional(),
        password: Joi.string().custom(password).optional(),
        role: Joi.string().valid('admin', 'user', 'librarian').optional(),
    }),
};

module.exports = {
    registerValidate : register,
    loginValidate: login,
    updateValidate: update,
}