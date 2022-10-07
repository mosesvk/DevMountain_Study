// The third layer is the Data Access Layer where we'll be working with our Database. 
    // We'll be exporting some methods for certain database operations like creating a WOD that can be used by our Service Layer.




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

  try {
    const isAlreadyAdded = workouts.findIndex(({name}) => name === newWorkout.name) > -1
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Workout with the name '${newWorkout.name}' already exists`,
      };
    }
    workouts.push(newWorkout)
    saveToDatabase(DB)
    return newWorkout 
  } catch (error) {
    throw new Error({ status: error?.status || 500, message: error?.message || error })
  }

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