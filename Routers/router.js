const express = require("express");
const router = express.Router();
const Post = require("../schema/Postschema");
const { route } = require("./postsMdlware");

router.get("/", async (req, res) => {
  try {
    res.send("HOme Page");
  } catch (err) {
    res.json({ msg: err });
  }
});

// get back all the posts
router.get("/show", async (req, res) => {
  try {
    const showPostList = await Post.find();
    res.json(showPostList);
  } catch (err) {
    res.json({ msg: err });
  }
});

// create and submit a post
router.post("/", async (req, res) => {
  // console.log(req.body);
  const newPost = new Post({
    title: req.body.title,
    name: req.body.name,
    phone: req.body.name,
  });
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ msg: err });
  }
});

// get back one specific post
router.get("/:id", async (req, res) => {
  try {
    const wantedPost = await Post.findById(req.params.id);
    res.json(wantedPost);
  } catch (err) {
    res.json({ msg: err });
  }
});

// delete a single post
router.delete("/:id", async (req, res) => {
  try {
    const rmvPost = await Post.remove({ _id: req.params.id });
    res.json(rmvPost);
  } catch (err) {
    res.json({ msg: err });
  }
});

// update a post
router.patch("/:id", async (req, res) => {
  try {
    const updPost = await Post.updateOne(
      { _id: req.params.id },
      { $set: { name: req.body.name } }
    );
    res.json(updPost);
  } catch (err) {
    res.json({ msg: err });
  }
});

// router.get("/posts", (req,res) => {
//   res.send("it is posts page")
// })

module.exports = router;
