const express = require('express');
const app = express();
// const router = express.Router()
const {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  deleteWorkoutById,
  updateWorkoutById,
} = require('../controllers/workoutsCtrl');
const requireAuth = require('../middleware/requireAuth')

// require auth for all workout routes
app.use(requireAuth)

app.route('/').get(getAllWorkouts).post(createWorkout);

app
  .route('/:id')
  .get(getWorkoutById)
  .delete(deleteWorkoutById)
  .patch(updateWorkoutById);


module.exports = app;
