const express = require('express');
const app = express();
const { getAllPosts, createPost } = require('../controllers/PostCtrl');

// router.get('/', getAllPosts)
app.route('/').get(getAllPosts).post(createPost);

module.exports = app;
