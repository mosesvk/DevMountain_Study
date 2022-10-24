const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user')
const colors = require('colors');
const bodyParser = require('body-parser')

// dotenv is to access the .env file
require('dotenv').config();
const port = process.env.PORT || 8000

//express app
const app = express();
  
// body-parser to access the req.body
app.use(bodyParser.json())

// middleware
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes)

// connect to mongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to MONGO_DB'.bgBrightYellow);
    app.listen(port, () => console.log(`listening to port ${port}`.cyan.underline));
  })
  .catch((err) => console.error(err));
