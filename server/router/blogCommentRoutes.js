const express = require("express");
const router = express.Router();
const { likeComment, dislikeComment, replyToComment } = require("../controllers/blogComment");

router.put("/:commentId/like", likeComment);
router.put("/:commentId/dislike", dislikeComment);
router.post("/:commentId/reply", replyToComment);

module.exports = router;
