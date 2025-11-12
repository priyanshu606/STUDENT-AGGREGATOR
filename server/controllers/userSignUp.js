const bcrypt = require('bcryptjs');
require('dotenv').config();
const SignUpUser = require('../models/userSignUp');
const {createToken} = require('../service/auth')
async function handleAllSignUpUser(req, res) {
    const { fullName, email, password ,role,admincode} = req.body;

    if (!fullName || !email || !password) {
        return res.status(400).json({ msg: 'All fields are required' });
    }

    try {
        
        if(role==='admin' && admincode!==process.env.ADMIN_VERIFICATION_CODE){
            return res.status(403).json({ msg: "Invalid admin code" });
        }
        const existingUser = await SignUpUser.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ msg: 'Email already in use' });
        }
       
        const newUser = await SignUpUser.create({
            fullName,
            email,
            password,
            role,
            admincode
        });

        console.log("User created:", newUser);
        return res.status(201).json({ msg: "Success", id: newUser._id });
    } catch (error) {
        console.error("Error:", error.message);
        return res.status(500).json({ msg: "Server error" });
    }
}

async function handleLoginUser(req,res) {
    const {email,password} = req.body;
    const user = await SignUpUser.findOne({email});
    if(!user){
      return  res.status(400).json({msg: "user not found"})
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch) return res.status(401).json({msg:"wrong password"});
    const token = createToken(user);
    res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
    res.json(
    {msg:"login successful",
    token,
    user:{
        _id:user._id,
        fullName:user.fullName,
        email:user.email,
        role:user.role
    }
})}

async function updateStudentProfile (req,res){
    try {
    const studentId = req.params.id;
    console.log(req.params.id);
    const updates = req.body;
    const updatedStudent = await SignUpUser.findByIdAndUpdate(studentId, updates, {
      new: true,
    });

    res.json(updatedStudent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}



module.exports = {
    handleAllSignUpUser,
    handleLoginUser,
    updateStudentProfile
};
