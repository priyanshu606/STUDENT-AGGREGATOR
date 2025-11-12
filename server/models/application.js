// models/Application.js
const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  internshipId: { type: mongoose.Schema.Types.ObjectId, ref: "Internship", required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  university: String,
  degree: String,
  year: String,
  skills: [String],
  linkedin: String,
  github: String, 
  portfolio: String,
  coverLetter: String,
  resumePath: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "SignUpUser", required: true }, 
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("Application", applicationSchema);
