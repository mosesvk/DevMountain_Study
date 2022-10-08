const {
  getAllRecordsForWorkouts,
  getRecordForWorkout,
} = require('../services/recordService');

const getAllRecordsCtrl = (req, res) => {
  try {
    const records = getAllRecordsForWorkouts();
    res.send({
      status: 500,
      data: records,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const getRecordForWorkoutCtrl = (req, res) => {
  const {
    params: { workoutId },
  } = req;

  if (!workoutId) {
    throw res.status(400).send({
      status: 'FAILED',
      data: 'parameter "workoutId" cannot be empty',
    });
  }

  try {
    const record = getRecordForWorkout(workoutId)
    res.send({status: 'OK', data: record})
  } catch (error) {
    res
    .status(error?.status || 500)
    .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllRecordsCtrl,
  getRecordForWorkoutCtrl,
};
