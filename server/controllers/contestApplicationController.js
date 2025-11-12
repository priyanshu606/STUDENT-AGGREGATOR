const ContestApplication = require("../models/ContestApplication");

async function submitApplication (req, res) {
  try {
    const newApplication = new ContestApplication(req.body);
    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

async function getApplications (req, res){
  try {
    const applications = await ContestApplication.find();
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

async function getContestById(req,res) {
   try{
    const contest = await ContestApplication.findById(req.params.id);
    res.status(200).json(contest);
   } catch (error) {
    res.status(500).json({ error: error.message });
   }
}

async function updateStatus (req,res) {
  try {
    const { status } = req.body;

    const updated = await ContestApplication.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


module.exports = {
  submitApplication,
  getApplications,
  getContestById,
  updateStatus
};