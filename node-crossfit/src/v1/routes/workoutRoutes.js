const express = require('express')
const {
  getAllWorkoutsCtrl,
  getOneWorkoutCtrl,
  createNewWorkoutCtrl,
  updateOneWorkoutCtrl,
  deleteOneWorkoutCtrl,
} = require("../../controllers/workoutController");
const {
  getAllRecordsCtrl,
  getRecordForWorkoutCtrl
} = require('../../controllers/recordController')


const router = express.Router() 

app.route('/')
  .get(getAllWorkoutsCtrl)
  .get(getOneWorkoutCtrl)
  .get(getAllRecordsCtrl)
  .post(createNewWorkoutCtrl)

app.route('/:workoutId')
  .get(getOneWorkoutCtrl)
  .patch(updateOneWorkoutCtrl)
  .delete(deleteOneWorkoutCtrl)

app.route('/:workoutId/records')
  .get(getRecordForWorkoutCtrl)

module.exports = router