const express = require('express');
const {handleSubmittedBlog,handleAllBlog,handleBlogById,handleToggleLike,handleToggleDislike } = require('../controllers/blogController')
const {authMiddleware} = require('../middleware/auth')

const router = express.Router();

router.post('/add/blog', authMiddleware ,handleSubmittedBlog);
router.get('/all/blog',handleAllBlog);
router.get('/blog/:id',handleBlogById);

router.put("/blog/:id/like", authMiddleware, handleToggleLike);
router.put("/blog/:id/dislike",authMiddleware, handleToggleDislike);


module.exports = router;