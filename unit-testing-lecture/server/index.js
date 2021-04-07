const express = require('express')
const posts = require('./data')

const app = express()

app.get('/api/todos', (req, res) => {
  res.send(posts)
})

app.listen(4000, () => console.log(`Listening on port 4000`))
