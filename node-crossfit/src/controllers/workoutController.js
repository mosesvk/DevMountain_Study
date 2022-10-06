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
  const workout = getOne();
  res.send('Get an existing workout');
};

const createNewCtrl = (req, res) => {
  const {body} = req;

  if (
    !body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips
  ) {
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips
  }

  const createdWorkout = createNew(newWorkout)
  res.status(201).send({status: "OK", data: createdWorkout})
};

const updateOneCtrl = (req, res) => {
  const updatedWorkout = updateOne();
  res.send('Update an existing workout');
};

const deleteOneCtrl = (req, res) => {
  deleteOne();
  res.send('Delete an existing workout');
};

module.exports = {
  getAllCtrl,
  getOneCtrl,
  createNewCtrl,
  updateOneCtrl,
  deleteOneCtrl,
};
