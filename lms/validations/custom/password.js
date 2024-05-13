const password =  (value, helpers) => {
    if (value.length < 8){
        return helpers.message('Password must be at least 8 characters long');
    }
    if (!value.match(/\d/)){
        return helpers.message('Password must contain at least one digit');
    }
    if (!value.match(/[a-z]/)){
        return helpers.message('Password must contain at least one lowercase letter');
    }
    if (!value.match(/[A-Z]/)){
        return helpers.message('Password must contain at least one uppercase letter');
    }
    return value;
}
module.exports = password;