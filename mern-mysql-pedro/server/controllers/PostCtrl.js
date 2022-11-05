const asyncHandler = require('express-async-handler');
const { Posts } = require('../models');

const getAllPosts = asyncHandler(async (req, res) => {
  try {
    const posts = await Posts.findAll()
    res.status(200).json({ body: posts })
  } catch (err) {
    console.error(err.message)
    res.json({ error: err.message })
  }
})

const createPost = asyncHandler(async (req, res) => {
  try {
    const createdPost = req.body
    await Posts.create(createdPost)
    res
      .status(200)
      .send({ message: 'Post successfully created', body: createdPost });
  } catch (err) {
    console.error(err.message);
    res.json({ error: err.message });
  }
});

module.exports = { getAllPosts, createPost };
