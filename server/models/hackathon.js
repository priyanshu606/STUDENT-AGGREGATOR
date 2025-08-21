
const mongoose = require('mongoose');

const hackathonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  apply: {
    type: Number,
    default: 0,
  },
  daysLeft: {
    type: Number,
    default: 0,
  },
  impression: {
    type: Number,
    default: 0,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  registrationDeadline: {
    type: Date,
    required: true,
  },
  prize: {
    type: String,
  },
  eligibility: {
    type: [String],
    default: [],
  },
  teamSize: {
    type: String,
  },
  themes: {
    type: [String],
    default: [],
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  }
}, {
  timestamps: true, 
});

const Hackathon = mongoose.model('Hackathon', hackathonSchema);

module.exports = Hackathon;
