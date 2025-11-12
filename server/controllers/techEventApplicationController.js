const TechEventApplication = require("../models/TechEventApplication");

async function applyTechEvent(req, res){
  try {
    await TechEventApplication.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json({ message: "Event Application Submitted Successfully ✅" });
  } catch {
    res.status(500).json({ error: "Server Error" });
  }
};

async function getAllEvents(req,res) {
   try {
     const techEvents = await TechEventApplication.find();
      res.status(200).json(techEvents);
   } catch (error) {
      res.status(500).json({ error: "Server error fetching internships" });
   }
}

async function getAllEventsById(req,res) {
    try {
      const techEvent = await TechEventApplication.findById(req.params.id);
      if (!techEvent) {
        return res.status(404).json({ error: "Application not found" });
      }
      res.status(200).json(techEvent);
    } catch (error) {
      res.status(500).json({ error: "Server error fetching application" });
    }
}
async function updateStatus (req,res) {
  try {
    const { status } = req.body;

    const updated = await TechEventApplication.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = { applyTechEvent ,getAllEvents,getAllEventsById,updateStatus};
