const Application = require('../models/application');
async function submitApplication(req, res) {
  try {
    if (!req.file) return res.status(400).json({ error: "Resume file is required" });

    const {
      internshipId,
      fullName,
      email,
      phone,
      university,
      degree,
      year,
      skills,
      linkedin,
      github,
      portfolio,
      coverLetter,
    } = req.body;

    // required validation server-side
    if (!fullName || !email || !phone) {
      return res.status(400).json({ error: "fullName, email and phone are required" });
    }

    const application = new Application({
      internshipId: internshipId || undefined,
      fullName,
      email,
      phone,
      university,
      degree,
      year,
      skills: skills ? (typeof skills === "string" ? skills.split(",").map(s => s.trim()) : skills) : [],
      linkedin,
      github,
      portfolio,
      coverLetter,
      resumePath: req.file.path,
      createdBy: req.user?.id || undefined, // if auth middleware sets req.user
    });

    await application.save();

    res.status(201).json({ message: "Application submitted", applicationId: application._id });
  } catch (err) {
    console.error("Error submitting application:", err);
    res.status(500).json({ error: "Server error submitting application" });
  }
}

async function getAllInternships(req,res) {
   try {
     const internships = await Application.find();
      res.status(200).json(internships);
   } catch (error) {
      res.status(500).json({ error: "Server error fetching internships" });
   }
}

async function getApplicationById(req,res) {
    try {
      const application = await Application.findById(req.params.id);
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

    const updated = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { submitApplication , getAllInternships,getApplicationById, updateStatus};
