const {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
} = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
  const allWorkouts = getAllWorkouts()
  res.send('Get all workouts');
};

const getOneWorkout = (req, res) => {
  const workout = getOneWorkout()
  res.send('Get an existing workout');
};

const createNewWorkout = (req, res) => {
  const createdWorkout = createNewWorkout()
  res.send('Create a new workout');
};

const updateOneWorkout = (req, res) => {
  const updatedWorkout = updateOneWorkout()
  res.send('Update an existing workout');
};

const deleteOneWorkout = (req, res) => {
  deleteOneWorkout()
  res.send('Delete an existing workout');
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
