const express = require('express')
const {handleCreateInternship,handleAllInternship} = require('../controllers/internship')

const router = express.Router();


// Routing for internship
router.post('/add/internship', handleCreateInternship);
router.get('/all/internship', handleAllInternship);


module.exports = router