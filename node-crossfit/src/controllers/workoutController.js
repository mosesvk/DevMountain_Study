// the CONTROLLER will be  handling all stuff that is related to HTTP. That means we're dealing with requests and responses for our endpoints.
// Above that layer is also a little Router from Express that passes requests to the corresponding controller.

const {
  getAll,
  getOne,
  createNew,
  updateOne,
  deleteOne,
} = require('../services/workoutService');

const getAllCtrl = (req, res) => {
  const allWorkouts = getAll();

  res.send({ status: 'OK', data: allWorkouts });
};

const getOneCtrl = (req, res) => {
  const {
    params: { workoutId },
  } = req;

  console.log('getOneCtrl');
  console.log(params);
  console.log('---');

  if (!workoutId) return;

  const workout = getOne(workoutId, params);

  res.send({ status: 'OK', data: workout, params });
};

const createNewCtrl = (req, res) => {
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

  const createdWorkout = createNew(newWorkout);
  res.status(201).send({ status: 'OK', data: createdWorkout });
};

const updateOneCtrl = (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req;

  if (!workoutId) return;

  const updatedWorkout = updateOne(workoutId, body);

  res.send({ status: 'OK', data: updatedWorkout });
};

const deleteOneCtrl = (req, res) => {
  const {
    params: { workoutId },
  } = req;

  if (!workoutId) return;

  deleteOne(workoutId);

  res.status(204).send({ status: 'OK' });
};

module.exports = {
  getAllCtrl,
  getOneCtrl,
  createNewCtrl,
  updateOneCtrl,
  deleteOneCtrl,
};
