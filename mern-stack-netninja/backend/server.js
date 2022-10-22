const express = require('express')
const workoutRoutes = require('./routes/workouts')

// dotenv is to access the .env file
require('dotenv').config()
const port = process.env.PORT

//express app
const app = express()

// middleware
app.use('/api/workouts', workoutRoutes)


app.listen(port, () => console.log(`listening to port ${port}`))