const express = require('express');
const { getAllPosts } = require('../controllers/PostCtrl');

const app = express();

app.route('/').get(getAllPosts);

module.exports = app
