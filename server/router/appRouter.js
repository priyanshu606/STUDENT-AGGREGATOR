const express = require('express')
const {handleAllSignUpUser,handleLoginUser} = require('../controllers/userSignUp')
const  {handleCreateHackathon,handleAllHackathon} = require('../controllers/hackothon')
const {handleCreateInternship,handleAllInternship} = require('../controllers/internship')
const router = express.Router();


// routing for login and signup
router.post('/user/signup',handleAllSignUpUser);
router.post('/user/login',handleLoginUser);

// Routing for internship
router.post('/add/internship', handleCreateInternship);
router.get('/all/internship', handleAllInternship);

// Routing for hackathon
router.post('/add/hackathon', handleCreateHackathon);
router.get('/all/hackathon', handleAllHackathon);


module.exports = router