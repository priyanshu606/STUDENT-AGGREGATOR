const mongoose = require("mongoose");

const speakerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  image: { type: String, required: true },
});

const techEventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  organizer: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  mode: { type: String, required: true },
  registrationFee: { type: String, required: true },
  banner: { type: String, required: true },
  description: { type: String, required: true },
  topics: [{ type: String, required: true }],
  speakers: [speakerSchema],
  website: { type: String, required: true },
});

module.exports = mongoose.model("TechEvent", techEventSchema);
