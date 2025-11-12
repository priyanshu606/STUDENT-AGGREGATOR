const mongoose = require("mongoose");

const contestApplicationSchema = new mongoose.Schema({
  contestId: { type: mongoose.Schema.Types.ObjectId, ref: "CodingContest", required: false },
  name: { type: String, required: true },
  email: { type: String, required: true },
  platform: { type: String, required: true },
  type: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "SignUpUser", required: false },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending"
  }
});

module.exports = mongoose.model("ContestApplication", contestApplicationSchema);
