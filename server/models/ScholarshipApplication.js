const mongoose = require("mongoose");

const scholarshipSchema = new mongoose.Schema({
  scholarshipId: { type: mongoose.Schema.Types.ObjectId, ref: "Scholarship", required: false },
  fullName: String,
  email: String,
  phone: String,
  age: String,
  gender: String,
  address: String,

  college: String,
  course: String,
  yearOfStudy: String,
  cgpa: String,
  enrollmentNo: String,

  familyIncome: String,
  fatherOccupation: String,
  motherOccupation: String,
  reason: String,

  idProofPath: String,
  incomeProofPath: String,

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "SignUpUser", required: false }, 
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending"
  },
}, { timestamps: true });

module.exports = mongoose.model("ScholarshipApplication", scholarshipSchema);
