// The whole business logic will be in the SERVICE Layer that exports certain services (methods) which are used by the controller.

const { v4: uuid } = require('uuid');
const Workout = require('../database/Workout');

const getAll = () => {
  try {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
  } catch (err) {
    throw new Error(err);
  }
};

const getOne = (workoutId) => {
  try {
    const workout = Workout.getOneWorkout(workoutId);
    return workout;
  } catch (err) {
    throw new Error(err);
  }
};

const createNew = (newWorkout) => {
  const workoutToInsert = {
    id: uuid(),
    ...newWorkout,
    createdAt: new Date().toLocaleString('en-us', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-us', { timeZone: 'UTC' }),
  };

  try {
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
  } catch (err) {
    throw new Error(err);
    // throw new Error({ status: 500, message: error?.message || error });
  }
};

const updateOne = (workoutId, changes) => {

  try {
    const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
  } catch (err) {
    throw new Error(err)
  }
};

const deleteOne = (workoutId) => {
  try {
    Workout.deleteOneWorkout(workoutId);
  } catch (err) {
    throw new Error(err)
  }
};

module.exports = {
  getAll,
  getOne,
  createNew,
  updateOne,
  deleteOne,
};
