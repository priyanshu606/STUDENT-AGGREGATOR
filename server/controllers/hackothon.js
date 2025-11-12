const Hackathon = require("../models/hackathon");

async function handleCreateHackathon(req, res) {
  try {
    const hackathon = await Hackathon.create(req.body);
    res
      .status(201)
      .json({ msg: "Hackathon created successfully", hackathon });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Failed to create hackathon", details: error.message });
  }
}

async function handleAllHackathon(req, res) {
  try {
    const { category, status, location } = req.query;
    const filter = {};
    const now = new Date();

    if (category) {
      filter.themes = { $regex: category, $options: "i" };
    }

    if (location) {
      filter.location = { $regex: location, $options: "i" };
    }

    if (status) {
      if (status === "upcoming") {
        filter.startDate = { $gt: now };
      } else if (status === "live") {
        filter.startDate = { $lte: now };
        filter.endDate = { $gte: now };
      } else if (status === "closed") {
        filter.endDate = { $lt: now };
      } else if (status === "expired") {
        filter.registrationDeadline = { $lt: now };
        filter.startDate = { $gt: now };
      }
    }

    const hackathons = await Hackathon.find(filter).sort({ createdAt: -1 });
    res.status(200).json(hackathons);
  } catch (error) {
    res.status(500).json({ error: "Server Error", details: error.message });
  }
}

module.exports = { handleCreateHackathon, handleAllHackathon };
