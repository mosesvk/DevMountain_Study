const express = require('express')
const app = express()
const router = express.Router() 
const {
  getAllWorkoutsCtrl,
  getOneWorkoutCtrl,
  createNewWorkoutCtrl,
  updateOneWorkoutCtrl,
  deleteOneWorkoutCtrl,
} = require("../../controllers/workoutController");


app.route('/')
  .get(getAllWorkoutsCtrl)
  .post(createNewWorkoutCtrl)

app.route('/:workoutId')
  .get(getOneWorkoutCtrl)
  .patch(updateOneWorkoutCtrl)
  .delete(deleteOneWorkoutCtrl)





module.exports = app