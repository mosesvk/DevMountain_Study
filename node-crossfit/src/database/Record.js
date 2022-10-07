const DB = require('./db.json')

const getRecordForWorkout = (workoutId) => {
  try {
    const record = DB.records.filter((record) => record.workout === workoutId)
    if (!record) {
      throw new Error({
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      })
    }
    return record
  } catch (err) {
    throw new Error({ 
      status: err?.status || 500, 
      message: err?.message ||err
    })
  }
}

module.exports = { getRecordForWorkout };
