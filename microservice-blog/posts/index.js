const express = require('express');
require('dotenv').config();

const app = express();

const posts = {}

app.get('/posts', (req, res) => {

})

app.post('/posts', (req, res) => {

})

const port = process.env.PORT || 8000

app.listen(port, () => console.log(
  `App is listening on Port ${port}`
))