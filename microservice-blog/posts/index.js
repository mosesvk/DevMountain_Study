const express = require('express');
const {randombytes} = require('crypto') // generates new id that is assigned to the post that the user is going to create
require('dotenv').config(); 
var bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.json())

const posts = {}

app.get('/posts', (req, res) => {
  res.status(500).send(posts)
})

app.post('/posts', (req, res) => {
  const id = randombytes(4).toString('hex');
  const {title} = req.body

  posts[id] = {
    id, title
  }

  res.status(201).send(posts[id])
})

const port = process.env.PORT || 8000

app.listen(port, () => console.log(
  `App is listening on Port ${port}`
))