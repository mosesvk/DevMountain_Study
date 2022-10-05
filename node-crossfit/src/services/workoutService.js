const Workout = require("../database/Workout");
const getAll = () => {
  // *** ADD ***
  const allWorkouts = Workout.getAllWorkouts();
  // *** ADD ***
  return allWorkouts;
};

const getOne = () => {
  return;
};

const createNew = () => {
  return;
};

const updateOne = () => {
  return;
};

const deleteOne = () => {
  return;
};

module.exports = {
  getAll,
  getOne,
  createNew,
  updateOne,
  deleteOne,
};