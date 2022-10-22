const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const Workout = require('../models/workoutModel');

// GET ALL workouts
const getAllWorkouts = asyncHandler(async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err.message);
  }
});

// GET workout by id
const getWorkoutById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(404)
      .send({ message: 'No workout was found with that given id' });
  }

  try {
    const workout = await Workout.findById(id);
    res.status(200).send(workout);
  } catch (err) {
    res
      .status(404)
      .send({ message: 'No workout was found with that given id' });
  }
});

// POST workout
const createWorkout = asyncHandler(async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
    console.log(`successfully added workout to mongoDB`);
  } catch (err) {
    console.error(err);
    res.json({ message: err.message });
  }
});

// DELETE workout
const deleteWorkoutById = (req, res) => {
  const id = req.params.id;

  res.json({ message: `deleting workout id - ${id}` });
};

// UPDATE workout
const updateWorkoutById = (req, res) => {
  const id = req.params.id;

  res.json({ message: `updating workout id - ${id}` });
};

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  deleteWorkoutById,
  updateWorkoutById,
};
