// The third layer is the Data Access Layer where we'll be working with our Database. 
    // We'll be exporting some methods for certain database operations like creating a WOD that can be used by our Service Layer.


const DB = require('./db.json');
const { saveToDatabase } = require("./utils");


const getAllWorkouts = (filterParams) => {
  try {
    let workouts = DB.workouts;
    if (filterParams.mode) {
      return DB.workouts.filter((workout) => (
        workout.mode.toLowerCase().includes(filterParams.mode)
      )) 
    }
    return workouts
  } catch (err) {
    throw new Error({stats: 500, message: err})
  }
};

const getOneWorkout = (workoutId) => {

  try {
    const workout = workouts.find(({id}) => (
      id === workoutId
    ))
  
    if (!workout) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
  
    return workout
  } catch (err) {
    throw { status: err?.status || 500, message: err?.message || err };
  }
  
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

  try {
    const isAlreadyAdded =
      DB.workouts.findIndex((workout) => workout.name === changes.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Workout with the name '${changes.name}' already exists`,
      };
    }
    const indexForUpdate = DB.workouts.findIndex(
      (workout) => workout.id === workoutId
    );
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    const updatedWorkout = {
      ...DB.workouts[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.workouts[indexForUpdate] = updatedWorkout;
    saveToDatabase(DB);
    return updatedWorkout;
  } catch (err) {
    throw { status: err?.status || 500, message: err?.message || err };

  }

  
};

const deleteOneWorkout = (workoutId) => {
  try {
    const indexForDeletion = DB.workouts.findIndex(
      (workout) => workout.id === workoutId
    );
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    DB.workouts.splice(indexForDeletion, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllWorkouts,
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};