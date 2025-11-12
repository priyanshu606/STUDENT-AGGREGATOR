const mongoose = require("mongoose");

const scholarshipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  provider: { type: String, required: true },
  eligibility: { type: String, required: true },
  amount: { type: String, required: true },
  duration: { type: String, required: true },
  deadline: { type: String, required: true },
  description: { type: String, required: true },
  benefits: { type: [String], default: [] },
  applicationProcess: { type: String, required: true },
  documentsRequired: { type: [String], default: [] },
  applicationLink: { type: String, required: true },
});

module.exports = mongoose.model("Scholarship", scholarshipSchema);
