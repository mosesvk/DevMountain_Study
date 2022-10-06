const {v4: uuid} = require('uuid')
const Workout = require("../database/Workout");



const getAll = () => {

  const allWorkouts = Workout.getAllWorkouts();

  return allWorkouts;
};

const getOne = () => {
  return;
};

const createNew = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString('en-us', {timeZone: 'UTC'}),
    updatedAt: new Date().toLocaleString('en-us', {timeZone: 'UTC'})
  }

  const createdWorkout = Workout.createNewWorkout(workoutToInsert)
  return;
};

const updateOne = () => {
  return;
};

const deleteOne = () => {
  return;
};

module.exports = {
  getAll,
  getOne,
  createNew,
  updateOne,
  deleteOne,
};