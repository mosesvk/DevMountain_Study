const express = require('express')

// dotenv is to access the .env file
require('dotenv').config()
const port = process.env.PORT

//express app
const app = express()

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.get('/', (req, res) => {
  res.json({message: 'Welcome to the app'})
})


app.listen(port, () => console.log(`listening to port ${port}`))