const Comment = require("../models/comment");


exports.likeComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    const userId = req.body.userId;

    if (comment.likes.includes(userId)) {
      comment.likes.pull(userId);
    } else {
      comment.likes.push(userId);
      comment.dislikes.pull(userId);
    }

    await comment.save();
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: "Error liking comment" });
  }
};


exports.dislikeComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    const userId = req.body.userId;

    if (comment.dislikes.includes(userId)) {
      comment.dislikes.pull(userId);
    } else {
      comment.dislikes.push(userId);
      comment.likes.pull(userId);
    }

    await comment.save();
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: "Error disliking comment" });
  }
};


exports.replyToComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    comment.replies.push({
      content: req.body.content,
      createdBy: req.body.userId,
    });

    await comment.save();
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: "Error replying to comment" });
  }
};
