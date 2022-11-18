const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const { randomBytes } = require('crypto');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id,
    title
  };

  await axios.post('http://localhost:4005/events', {
    type: 'PostCreated', 
    data: {
      id, title
    }
  })

  res.status(201).send(posts[id]);
});

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`POSTS Server listening on PORT ${PORT}`);
});
