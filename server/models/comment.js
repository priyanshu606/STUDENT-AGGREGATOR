const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SignUpUser",
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "SignUpUser" }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "SignUpUser" }],
    replies: [
      {
        content: String,
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "SignUpUser" },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
