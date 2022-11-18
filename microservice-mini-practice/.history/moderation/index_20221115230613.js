const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {});

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`MODERATION Listening on PORT - ${PORT}`);
});
