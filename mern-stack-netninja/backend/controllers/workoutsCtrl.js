const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const Workout = require('../models/workoutModel');

// GET ALL workouts
const getAllWorkouts = asyncHandler(async (req, res) => {
  const user_id = req.user._id;
  try {aqw  
    const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });
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

  let emptyFields = [];

  if (!title) {
    emptyFields.push('title');
  }
  if (!reps) {
    emptyFields.push('reps');
  }
  if (!load) {
    emptyFields.push('load');
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill in all of the fields', emptyFields });
  }

  try {
    const user_id = req.user._id; // remember that we get the user_id from the 'requireAuth.js' middleware function. If the user is authorized (or logged in)
    const workout = await Workout.create({ title, reps, load, user_id });
    res.status(200).json(workout);
    console.log(`successfully added workout to mongoDB`);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

// DELETE workout
const deleteWorkoutById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(404)
      .send({ message: 'No workout was found with that given id' });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({ error: 'No such workout' });
  }

  res.status(200).json(workout);
});

// UPDATE workout
// update a workout
const updateWorkoutById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such workout' });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(400).json({ error: 'No such workout' });
  }

  res.status(200).json(workout);
};

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  deleteWorkoutById,
  updateWorkoutById,
};
