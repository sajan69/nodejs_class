const Joi = require('joi');
const createBook = {
    body:Joi.object({
        title: Joi.string().required(),
        year: Joi.number().required(),
        author : Joi.string().required(),
        edition: Joi.number().optional(),
    })
}

module.exports={
    createBook,
}