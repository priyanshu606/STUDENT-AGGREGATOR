const mongoose = require("mongoose");

const hackathonAppSchema = new mongoose.Schema(
  {
    hackathonId: { type: mongoose.Schema.Types.ObjectId, ref: "Hackathon", required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    teamName: { type: String, required: true },
    teamMembers: [String],
    projectIdea: { type: String, required: true },
    techStack: String,
    github: String,
    linkedin: String,
    projectFilePath: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "SignUpUser"},
    status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending"
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model("HackathonApplication", hackathonAppSchema);
