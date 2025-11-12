const express = require('express');
const router = express.Router();
const {handleCreateComment,handleCommentByBlogId,countComments} = require('../controllers/commentController');
const {authMiddleware} = require('../middleware/auth')

router.post('/add/comment',authMiddleware,handleCreateComment);
router.get('/comment/count',countComments);
router.get('/comment/:id',handleCommentByBlogId);


module.exports = router;