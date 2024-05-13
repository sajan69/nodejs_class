const { default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt');



const UserSchema = mongoose.Schema({
    username:{
        type :String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum: ['admin', 'user','librarian'], // 'admin', 'user', 'librarian
        default: 'user',

    }
}, {timestamps: true});

UserSchema.statics.isEmailAlreadyExist = async function(email){
    const user = await this.findOne({email});
    return !!user;
}

UserSchema.methods.comparePassword = async function(candidatePassword){
    const user = this;
    return bcrypt.compare(candidatePassword, user.password);
}

UserSchema.pre('save', async function(next){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 10);
    }
    
    next();
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;