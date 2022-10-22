const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const colors = require('colors');

// dotenv is to access the .env file
require('dotenv').config();
const port = process.env.PORT;

//express app
const app = express();

// middleware
app.use('/api/workouts', workoutRoutes);

// connect to mongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => console.log(`listening to port ${port}`.cyan.underline));
    console.log('connected to MongoDB'.bgGreen);
  })
  .catch((err) => console.error(err));
