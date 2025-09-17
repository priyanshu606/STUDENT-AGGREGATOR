const TechEvents = require('../models/techEvents')

async function handleCreateTechEvents(req,res) {
    try {
        const events = req.body;
        const newEvents = await TechEvents.create(events);
        res.status(201).json({msg:"created successfully",techEvents:newEvents});
    } catch (error) {
        res.status(400).json({error: 'Failed to create Scholarship', details: error.message});
    }
}

async function handleAllTechEvents(req,res) {
    try {
        const events = await TechEvents.find().sort({createdAt:-1});
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
}

module.exports = {handleCreateTechEvents,handleAllTechEvents}