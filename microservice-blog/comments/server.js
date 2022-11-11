const express = require('express');
require('dotenv').config();
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors())

const commentsByPostId = {};

// MIDDLEWARE
app.get('/api/posts/:id/comments', (req, res) => {
  try {
    res.status(200).send(commentsByPostId[req.params.id]);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.post('/api/posts/:id/comments', (req, res) => {

  try {
    const commentId = randomBytes(4).toString('hex');

    const { content } = req.body;
    const comments = commentsByPostId[req.params.id] || [];
    comments.push({ id: commentId, content });
    commentsByPostId[req.params.id] = comments;

    res.status(201).send({id: commentId, param: req.params.id, content: content, comments: comments});
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`App(Comments) Listening on PORT ${port}`));
