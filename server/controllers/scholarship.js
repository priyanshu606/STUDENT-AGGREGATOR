const Scholarship = require("../models/Scholarship");

// Create new scholarship
async function handleCreateScholarship(req, res) {
  try {
    const scholarship = new Scholarship(req.body);
    await scholarship.save();
    res.status(201).json(scholarship);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get all scholarships (with filters)
async function getAllScholarships(req, res) {
  try {
    const { provider, eligibility, minAmount, maxAmount, deadline, search, active } = req.query;

    let filter = {};

    // ✅ Provider filter
    if (provider) {
      filter.provider = { $regex: provider, $options: "i" };
    }

    // ✅ Eligibility filter
    if (eligibility) {
      filter.eligibility = { $regex: eligibility, $options: "i" };
    }

    // ✅ Search in title or description
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // ✅ Active (only future deadlines)
    if (active === "true") {
      const today = new Date().toISOString().split("T")[0];
      filter.deadline = { $gte: today };
    }

    // ✅ Amount range (if applicable)
    if (minAmount || maxAmount) {
      // Try to extract number safely
      const extractNumber = (str) => parseInt(str.replace(/[^\d]/g, "")) || 0;

      filter.amount = {};
      if (minAmount) filter.amount.$gte = extractNumber(minAmount);
      if (maxAmount) filter.amount.$lte = extractNumber(maxAmount);
    }

    // ✅ Deadline filter (optional specific date)
    if (deadline) {
      filter.deadline = { $lte: deadline };
    }

    const scholarships = await Scholarship.find(filter);
    res.status(200).json(scholarships);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Get scholarship by ID
async function getScholarshipById(req, res) {
  try {
    const scholarship = await Scholarship.findById(req.params.id);
    if (!scholarship) {
      return res.status(404).json({ message: "Scholarship not found" });
    }
    res.status(200).json(scholarship);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  handleCreateScholarship,
  getAllScholarships,
  getScholarshipById,
};
