const {v4: uuid} = require('uuid')
const Workout = require("../database/Workout");



const getAll = () => {

  const allWorkouts = Workout.getAllWorkouts();

  return allWorkouts;
};

const getOne = (workoutId, params) => {

  console.log('getOneService')
  console.log(params)
  console.log('-----')

  const workout = Workout.getOneWorkout(workoutId)

  return workout
};

const createNew = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString('en-us', {timeZone: 'UTC'}),
    updatedAt: new Date().toLocaleString('en-us', {timeZone: 'UTC'})
  }

  const createdWorkout = Workout.createNewWorkout(workoutToInsert)

  return createdWorkout
};

const updateOne = (workoutId, changes) => {
  const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);

  return updatedWorkout;
};

const deleteOne = (workoutId) => {
  Workout.deleteOneWorkout(workoutId);
};

module.exports = {
  getAll,
  getOne,
  createNew,
  updateOne,
  deleteOne,
};