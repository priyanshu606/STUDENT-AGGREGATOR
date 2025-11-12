const mongoose = require("mongoose");

const contestSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    platform: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    duration: { type: String, required: true },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      required: true,
    },
    participants: { type: String },
    tags: [{ type: String }],
    description: { type: String },
    link: { type: String, required: true },
    status: {
      type: String,
      enum: ["Ongoing", "Upcoming", "Past"],
      default: "Upcoming",
    },
  },
  { timestamps: true }
);

contestSchema.pre("save", function (next) {
  const now = new Date();
  if (this.startDate > now) this.status = "Upcoming";
  else if (this.startDate <= now && this.endDate >= now) this.status = "Ongoing";
  else this.status = "Past";
  next();
});

module.exports = mongoose.model("Contest", contestSchema);

