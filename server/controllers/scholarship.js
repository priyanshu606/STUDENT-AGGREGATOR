const Scholarship = require('../models/scholarship')

async function handleCreateScholarship(req,res) {
    
    try {
        const scholarship = req.body;
       console.log(scholarship);
        const newScholarshuip = await Scholarship.create(scholarship);
        res.status(201).json({ msg: "Scholarship created successfully", scholarship: newScholarshuip });
    } catch (error) {
        res.status(400).json({error: 'Failed to create Scholarship', details: error.message})
    }
    

}

async function handleAllScholarship(req,res) {
    try {
        const scholarship = await Scholarship.find().sort({createdAt:-1});
        res.status(200).json(scholarship);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
}

module.exports = {handleCreateScholarship,handleAllScholarship};