const express = require('express')
const {handleAllSignUpUser,handleLoginUser,updateStudentProfile} = require('../controllers/userSignUp')

const router = express.Router();


// routing for login and signup
router.post('/user/signup',handleAllSignUpUser);
router.post('/user/login',handleLoginUser);
router.put("/user/:id", updateStudentProfile);


module.exports = router