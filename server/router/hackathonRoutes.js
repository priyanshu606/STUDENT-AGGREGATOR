const express = require('express')
const  {handleCreateHackathon,handleAllHackathon} = require('../controllers/hackothon')

const router = express.Router();


// Routing for internship
router.post('/add/hackathon', handleCreateHackathon);
router.get('/all/hackathon', handleAllHackathon);


module.exports = router