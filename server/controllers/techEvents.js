const TechEvent = require("../models/techEvents");


exports.createTechEvent = async (req, res) => {
  try {
    const event = new TechEvent(req.body);
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create event" });
  }
};


exports.getAllTechEvents = async (req, res) => {
  try {
    const events = await TechEvent.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
};


exports.getTechEventById = async (req, res) => {
  try {
    const event = await TechEvent.findById(req.params.id);
    if (!event) return res.status(404).json({ error: "Event not found" });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch event" });
  }
};
