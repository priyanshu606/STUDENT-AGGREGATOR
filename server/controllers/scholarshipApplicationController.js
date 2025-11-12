const ScholarshipApplication = require("../models/ScholarshipApplication");

async function applyScholarship (req, res){
  try {
    if (!req.files.idProof || !req.files.incomeProof)
      return res.status(400).json({ error: "ID Proof & Income Proof are required" });

    const data = { ...req.body };
    data.idProofPath = req.files.idProof[0].path;
    data.incomeProofPath = req.files.incomeProof[0].path;
    data.createdBy = req.user.id;

    await ScholarshipApplication.create(data);

    res.status(201).json({ message: "Scholarship Application Submitted Successfully ✅" });
  } catch {
    res.status(500).json({ error: "Server Error" });
  }
};

async function getAllScholarship(req,res) {
   try {
     const scholarships = await ScholarshipApplication.find().lean();
      res.status(200).json(scholarships);
      console.log(scholarships)
   } catch (error) {
     console.log("🔥 BACKEND ERROR:", error);
      res.status(500).json({ error: "Server error fetching scholarship" });
   }
}

async function getScholarshipById(req,res) {
    try {
      const scholarship = await ScholarshipApplication.findById(req.params.id);
      if (!scholarship) {
        return res.status(404).json({ error: "Application not found" });
      }
      res.status(200).json(scholarship);
    } catch (error) {
      res.status(500).json({ error: "Server error fetching application" });
    }
}

async function updateStatus (req,res) {
  try {
    const { status } = req.body;

    const updated = await ScholarshipApplication.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { applyScholarship ,getAllScholarship,getScholarshipById,updateStatus};
