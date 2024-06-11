const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
const {ServerConfig}= require('../config')

const userSchema = mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    gender:{
        type: String,
        required: true,
        enum:["male","female"]
    },
    password:{
        type: String,
        required: true,
        minlength:6,
    },
    profilepic:{
        type: String,
        default:""
    }
},{timestamps:true});

userSchema.pre('save', async function (next) {
    const user = this;

    // If the password field is not modified, move to the next middleware
    if (!user.isModified('password')) {
        return next();
    }

    try {
        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(+ServerConfig.SALT_ROUNDS);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
    } catch (err) {
        next(err);
    }
});

const User = mongoose.model("User",userSchema)

module.exports = User;