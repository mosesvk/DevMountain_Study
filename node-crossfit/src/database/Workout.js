const DB = require('./db.json');
const {workouts} = require('./db.json')
const { saveToDatabase } = require("./utils");


const getAllWorkouts = () => {
  return DB.workouts;
};

const getOneWorkout = (workoutId) => {
  
  const workout = workouts.find(({id}) => (
    id === workoutId
  ))

  if (!workout) return;

  return workout



};

const createNewWorkout = (newWorkout) => {

  const isAlreadyAdded = workouts.findIndex(({name}) => name === newWorkout.name) > -1

  if (isAlreadyAdded) return;

  workouts.push(newWorkout)
  saveToDatabase(DB)
  return newWorkout

};

const updateOneWorkout = (workoutId, changes) => {

  const indexForUpdate = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForUpdate === -1) {
    return;
  }
  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  DB.workouts[indexForUpdate] = updatedWorkout;
  saveToDatabase(DB);
  return updatedWorkout;
};

const deleteOneWorkout = (workoutId) => {
  const indexForDeletion = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForDeletion === -1) {
    return;
  }
  DB.workouts.splice(indexForDeletion, 1);
  saveToDatabase(DB);
};

module.exports = {
  getAllWorkouts,
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};