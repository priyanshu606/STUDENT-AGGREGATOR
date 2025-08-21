const Hackathon = require('../models/hackathon')

async function handleCreateHackathon(req,res) {
     try {
      const hackathon = req.body;
      Hackathon.create(hackathon)
      res.status(201).json({msg:"internship created successfully"},hackathon);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create internship', details: error.message });
  }
}

async function handleAllHackathon(req,res) {
    try {
    const hackathons = await Hackathon.find().sort({ createdAt: -1 });
    res.status(200).json(hackathons);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
}

module.exports = {handleCreateHackathon,handleAllHackathon};
