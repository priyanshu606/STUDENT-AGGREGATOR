const Internship = require('../models/internship');

async function handleCreateInternship(req, res) {
  try {
    const internship = req.body;
    const newInternship = await Internship.create(internship);
    res.status(201).json({ 
      msg: "Internship created successfully", 
      internship: newInternship 
    });
  } catch (error) {
    res.status(400).json({ 
      error: 'Failed to create internship', 
      details: error.message 
    });
  }
}

async function handleAllInternship(req, res) {
    try {
    const { role, workType, location, company } = req.query;

    let filter = {};

    if (role)
      filter.role = { $regex: role, $options: "i" }; 
    if (workType)
      filter.workType = { $regex: workType, $options: "i" };
    if (location)
      filter.location = { $regex: location, $options: "i" };
    if (company)
      filter.company = { $regex: company, $options: "i" };

    const internships = await Internship.find(filter).sort({ createdAt: -1 });

    res.status(200).json(internships);
  } catch (error) {
    res.status(500).json({ error: "Server Error", details: error.message });
  }
}

module.exports = { handleCreateInternship, handleAllInternship };
