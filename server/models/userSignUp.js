const mongoose = require('mongoose')
const { type } = require('os')
const bcrypt = require('bcrypt');
const signUpSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type: String, 
        enum: ["student", "admin"],
        default: "student" 
    }
})

signUpSchema.pre('save',async function (next) {
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

const SignUpUser  = mongoose.model('SignUpUser',signUpSchema);

module.exports = SignUpUser;