const Blog = require('../models/blog');
const Comment = require('../models/comment'); 

async function handleSubmittedBlog(req, res) {
  try {
    const blogData = {
      ...req.body,
      createdBy: req.user.id
    };
    const newBlog = await Blog.create(blogData);
    res.status(201).json({ msg: "Blog created successfully", blog: newBlog });
  } catch (error) {
    res.status(400).json({ error: 'Failed to create blog', details: error.message });
  }
}

async function handleAllBlog(req, res) {
  try {
    const { tag } = req.query;
    let query = {};
    if (tag && tag !== "all-blogs") {
      query.tags = tag;
    }

    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .populate("createdBy", "fullName email");

 
    const blogsWithComments = await Promise.all(
      blogs.map(async (blog) => {
        const commentCount = await Comment.countDocuments({ blog: blog._id });
        return {
          ...blog.toObject(),
          commentCount
        };
      })
    );

    res.status(200).json(blogsWithComments);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
}

async function handleBlogById(req, res) {
  const id = req.params.id;
  try {
    const blog = await Blog.findById(id).populate("createdBy");

    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }

    blog.views = (blog.views || 0) + 1;
    await blog.save();

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function handleToggleLike(req, res) {
  try {
    const blogId = req.params.id;
    const userId = req.user.id;

    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ msg: "Blog not found" });

    const alreadyLiked = blog.likes.includes(userId);
    const alreadyDisliked = blog.dislikes.includes(userId);

    if (alreadyLiked) {
      blog.likes = blog.likes.filter((id) => id.toString() !== userId);
    } else {
      blog.likes.push(userId);
      if (alreadyDisliked) {
        blog.dislikes = blog.dislikes.filter((id) => id.toString() !== userId);
      }
    }

    await blog.save();

    res.status(200).json({
      msg: alreadyLiked ? "Unliked the blog" : "Liked the blog",
      likesCount: blog.likes.length,
      dislikesCount: blog.dislikes.length,
      likedByUser: !alreadyLiked,
      dislikedByUser: false,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function handleToggleDislike(req, res) {
  try {
    const blogId = req.params.id;
    const userId = req.user.id;

    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ msg: "Blog not found" });

    const alreadyDisliked = blog.dislikes.includes(userId);
    const alreadyLiked = blog.likes.includes(userId);

    if (alreadyDisliked) {
      blog.dislikes = blog.dislikes.filter((id) => id.toString() !== userId);
    } else {
      blog.dislikes.push(userId);
      if (alreadyLiked) {
        blog.likes = blog.likes.filter((id) => id.toString() !== userId);
      }
    }

    await blog.save();

    res.status(200).json({
      msg: alreadyDisliked ? "Removed dislike" : "Disliked the blog",
      likesCount: blog.likes.length,
      dislikesCount: blog.dislikes.length,
      likedByUser: false,
      dislikedByUser: !alreadyDisliked,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  handleSubmittedBlog,
  handleAllBlog,
  handleBlogById,
  handleToggleLike,
  handleToggleDislike
};
