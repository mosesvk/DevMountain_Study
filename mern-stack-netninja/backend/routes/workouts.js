const express = require('express');
const app = express();
const {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  deleteWorkoutById,
  updateWorkoutById,
} = require('../controllers/workoutsCtrl');

app.route('/').get(getAllWorkouts).post(createWorkout);

app
  .route('/:id')
  .get(getWorkoutById)
  .delete(deleteWorkoutById)
  .patch(updateWorkoutById);

module.exports = app;
