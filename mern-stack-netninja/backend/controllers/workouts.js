// GET ALL workouts
const getAllWorkouts = (req, res) => {
  res.json({ message: 'GET all workouts' });
};

// GET workout by id
const getWorkoutById = (req, res) => {
  const id = req.params.id;

  res.json({ message: `GET single workout with id - ${id}` });
};

// POST workout
const createWorkout = (req, res) => {
  
  res.d(req.body);
};

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
  updateWorkoutById
};
