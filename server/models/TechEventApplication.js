const mongoose = require("mongoose");

const techEventSchema = new mongoose.Schema(
  {
    techEventId: { type: mongoose.Schema.Types.ObjectId, ref: "TechEvent" },
    fullName: String,
    email: String,
    phone: String,
    organization: String,
    role: String,
    yearOrExperience: String,
    eventName: String,
    eventType: String,
    participationType: String,
    reason: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "SignUpUser" },
    status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending"
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model("TechEventApplication", techEventSchema);
