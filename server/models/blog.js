const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },

    tags: { type: String,
      enum: [
        "all-blogs",
        "internship",
        "hackathon",
        "scholarship",
        "tech-events",
        "coding-contest",
        "tech-news",
      ], 
      default: "all-blogs",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SignUpUser",
      required: true,
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "SignUpUser" }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "SignUpUser" }],
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
