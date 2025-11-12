const Comment = require('../models/comment');

async function handleCreateComment(req,res) {
    try {       
    const { content, blogId } = req.body;
    const createdBy = req.user.id;

    if (!content || !blogId || !createdBy) {
      return res.status(400).json({ error: "content, blogId, and createdBy are required" });
    }

    const newComment = await Comment.create({
      content,
      blogId,
      createdBy,
    });

    const populatedComment = await newComment.populate("createdBy", "fullName email");

    res.status(201).json(populatedComment);
  } catch (err) {
    console.error("Error creating comment:", err);
    res.status(500).json({ error: "Server error while creating comment" });
  }
}



async function handleCommentByBlogId(req,res) {
      try {
    const { id } = req.params; 
    console.log(id);
    const comments = await Comment.find({ blogId: id })
      .populate("createdBy", "fullName email")
      .sort({ createdAt: -1 }); 

    if (!comments || comments.length === 0) {
      return res.status(404).json({ message: "No comments found for this blog" });
    }

    res.status(200).json(comments);
  } catch (err) {
    console.error("Error fetching comments by blogId:", err);
    res.status(500).json({ error: "Server error while fetching comments by blogId" });
  }
}

async function countComments(req,res) {
   try {
    const counts = await Comment.aggregate([
      {
        $group: {
          _id: "$blogId", 
          count: { $sum: 1 },
        },
      },
    ]);

    
    const countMap = {};
    counts.forEach((c) => {
      countMap[c._id] = c.count;
    });

    res.status(200).json(countMap);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {handleCreateComment,handleCommentByBlogId,countComments};