const express = require("express");
const Post = require("../models/Post");
const auth = require("../middleware/authMiddleware");

const router = express.Router();


// ✅ CREATE POST (Protected)
router.post("/", auth, async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.user.userId
    });

    const savedPost = await newPost.save();
    res.json(savedPost);

  } catch (err) {
    res.status(500).json(err);
  }
});


// ✅ GET ALL POSTS
router.get("/", async (req, res) => {
  const posts = await Post.find()
    .populate("author", "username")
    .sort({ createdAt: -1 });

  res.json(posts);
});


// ✅ GET SINGLE POST
router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id)
    .populate("author", "username");

  res.json(post);
});


// ✅ UPDATE POST (Protected)
router.put("/:id", auth, async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post.author.toString() !== req.user.userId) {
    return res.status(403).json("Not allowed");
  }

  const updated = await Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
});


// ✅ DELETE POST (Protected)
router.delete("/:id", auth, async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post.author.toString() !== req.user.userId) {
    return res.status(403).json("Not allowed");
  }

  await Post.findByIdAndDelete(req.params.id);

  res.json("Post deleted");
});

module.exports = router;