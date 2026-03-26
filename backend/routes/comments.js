const express = require("express");
const Comment = require("../models/Comment");
const auth = require("../middleware/authMiddleware");

const router = express.Router();


// ✅ ADD COMMENT (Protected)
router.post("/", auth, async (req, res) => {
  try {
    const newComment = new Comment({
      text: req.body.text,
      post: req.body.postId,
      author: req.user.userId
    });

    const saved = await newComment.save();
    res.json(saved);

  } catch (err) {
    res.status(500).json(err.message);
  }
});


// ✅ GET COMMENTS FOR A POST
router.get("/:postId", async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId })
    .populate("author", "username");

  res.json(comments);
});

module.exports = router;