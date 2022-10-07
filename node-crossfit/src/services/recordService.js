const { v4: uuid } = require('uuid');
const Record = require('../database/Record');

const getAllRecordsForWorkouts = () => {
  try {
    const records = Record.getAllRecordsForWorkouts()
    return records
  } catch (err) {
    throw new Error(err)
  }
}

const getRecordForWorkout = (workoutId) => {
  try {
    const record = Record.getRecordForWorkout(workoutId);
    return record;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { getAllRecordsForWorkouts, getRecordForWorkout };
