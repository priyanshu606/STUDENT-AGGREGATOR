const HackathonApplication = require("../models/HackathonApplication");

async function applyHackathon(req, res){
  try {
    if (!req.file) return res.status(400).json({ error: "Project file is required" });

    const {
      hackathonId,
      fullName,
      email,
      phone,
      teamName,
      teamMembers,
      projectIdea,
      techStack,
      github,
      linkedin,
    } = req.body;

    if (!fullName || !email || !phone || !teamName || !projectIdea)
      return res.status(400).json({ error: "All required fields must be filled" });

    const application = new HackathonApplication({
      hackathonId,
      fullName,
      email,
      phone,
      teamName,
      teamMembers: teamMembers ? teamMembers.split(",").map((m) => m.trim()) : [],
      projectIdea,
      techStack,
      github,
      linkedin,
      projectFilePath: req.file.path,
      createdBy: req.user?.id,
    });

    await application.save();
    res.status(201).json({ message: "Hackathon application submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error while submitting application" });
  }
};

async function getAllHackathons(req,res) {
   try {
     const hackathon = await HackathonApplication.find();
      res.status(200).json(hackathon);
   } catch (error) {
      res.status(500).json({ error: "Server error fetching internships" });
   }
}

async function getHackathonById(req,res) {
    try {
      const application = await HackathonApplication.findById(req.params.id);
      if (!application) {
        return res.status(404).json({ error: "Application not found" });
      }
      res.status(200).json(application);
    } catch (error) {
      res.status(500).json({ error: "Server error fetching application" });
    }
}

async function updateStatus (req,res) {
  try {
    const { status } = req.body;

    const updated = await HackathonApplication.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { applyHackathon , getAllHackathons,getHackathonById,updateStatus};

