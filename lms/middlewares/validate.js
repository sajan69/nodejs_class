const Joi = require("joi");

const validate = (schema) => (req, res, next) => {
    const object = Object.keys(schema).reduce((obj, key) => {
        if (obj && Object.prototype.hasOwnProperty.call(req,key) ){
            obj[key]=req[key];
        
        }
        return obj;
    },{})
    const { value, error} = Joi.compile(schema).validate(object);

    if (error){
        const errorMessage = error.details.map((detail) => detail.message).join(',');
        next(new Error(errorMessage))
    }
    next();
}
module.exports = validate;