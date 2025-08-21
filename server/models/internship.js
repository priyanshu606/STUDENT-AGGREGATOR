  const mongoose = require("mongoose");

  const internshipSchema = mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: true,
      },
      eligibility: {
        type: [String],
        required: true,
      },
      workType: {
        type: String, 
        required: true,
      },
      duration: {
        type: String,
        required: true,
      },
      stipend: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      applicationLink: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  const Internship = mongoose.model('Internship', internshipSchema);

  module.exports = Internship;
