const Contest = require("../models/contestModel");

 async function createContest(req,res) {
 
  try {
    const contest = new Contest(req.body);
    await contest.save();
    res.status(201).json(contest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

async function getContests(req,res) {
  try {
    const { search, status, tags, platform } = req.query;
    const query = {};

    if (search && search.trim() !== "") {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { platform: { $regex: search, $options: "i" } },
      ];
    }

    if (tags && tags !== "All tags") {
      query.tags = { $in: tags.split(",").map((t) => t.trim()) };
    }

    if (platform && platform !== "All") {
      query.platform = platform;
    }

    if (status && status !== "All") {
      query.status = status;
    }

    const contests = await Contest.find(query).sort({ startDate: 1 });
    res.json(contests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createContest, getContests };