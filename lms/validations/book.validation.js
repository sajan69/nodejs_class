const Joi = require('joi');
const createBook = {
    body:Joi.object({
        name:Joi.string().length(5).required(),
        author:Joi.string().required(),
        price: Joi.number().min(100).required(),
        edition: Joi.string().optional(),
    })
}

module.exports={
    createBook,
}