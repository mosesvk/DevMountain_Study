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

  console.log(title)
  posts[id] = {
    id,
    title
  };

  await axios.post('http://event-bus-srv:4005/events', {
    type: 'PostCreated', 
    data: {
      id, title
    }
  })

  console.log(posts)

  res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
  console.log('Received Event', req.body.type)

  res.send({})
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log('v55')
  console.log(`POSTS Server listening on PORT ${PORT}`);
});
