const DB = require('./db.json')

const getRecordForWorkout = (workoutId) => {
  try {
    
  } catch (err) {
    throw new Error({ 
      status: err?.status || 500, 
      message: err?.message ||err
    })
  }
}

module.exports = { getRecordForWorkout };
