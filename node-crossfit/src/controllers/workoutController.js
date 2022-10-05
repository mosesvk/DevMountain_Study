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
  const createdWorkout = createNew();
  res.send('Create a new workout');
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
