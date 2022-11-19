const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config()

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
  const { type, data } = req.body;

  if (type === 'CommentCreated') {
    const status = data.content.toLowerCase().includes('orange') ? 'rejected' : 'approved';
    console.log(status || 'reached')
    await axios.post('http://event-bus-srv:4005/events', {
      type: 'CommentModerated',
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content
      }
    });
  }

  res.send({});
});


const PORT = process.env.PORT || 4003
app.listen(PORT, () => {
  console.log(`MODERATION Listening on PORT - ${PORT}`);
});
