// the CONTROLLER will be  handling all stuff that is related to HTTP. That means we're dealing with requests and responses for our endpoints.
// Above that layer is also a little Router from Express that passes requests to the corresponding controller.

const {
  getAll,
  getOne,
  createNew,
  updateOne,
  deleteOne,
} = require('../services/workoutService');





const getAllWorkoutsCtrl = (req, res) => {
  try {
    const allWorkouts = getAll();
    res.send({ status: 'OK', data: allWorkouts });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const getOneWorkoutCtrl = (req, res) => {
  const {
    params: { workoutId },
  } = req;

  if (!workoutId)
    throw res.status(400).send({
      status: 'FAILED',
      data: 'parameter "workoutId" cannot be empty',
    });

  try {
    const workout = getOne(workoutId, params);
    res.send({ status: 'OK', data: workout, params });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const createNewWorkoutCtrl = (req, res) => {
  const { body, params } = req;

  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error:
          'One of the following keys is missing or is empty in request body: "name", "mode", "equipment", "exercises", "trainerTips"',
      },
    });

    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  try {
    const createdWorkout = createNew(newWorkout);
    res.status(201).send({ status: 'OK', data: createdWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const updateOneWorkoutCtrl = (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req;

  if (!workoutId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }

  try {
    const updatedWorkout = updateOne(workoutId, body);
    res.send({ status: 'OK', data: updatedWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const deleteOneWorkoutCtrl = (req, res) => {
  const {
    params: { workoutId },
  } = req;

  if (!workoutId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }

  try {
    deleteOne(workoutId);
    res.status(204).send({ status: 'OK' });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllWorkoutsCtrl,
  getOneWorkoutCtrl,
  createNewWorkoutCtrl,
  updateOneWorkoutCtrl,
  deleteOneWorkoutCtrl,
};
