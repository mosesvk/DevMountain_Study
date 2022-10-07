const express = require('express')
const {
  getAllWorkoutsCtrl,
  getOneWorkoutCtrl,
  createNewWorkoutCtrl,
  updateOneWorkoutCtrl,
  deleteOneWorkoutCtrl,
} = require("../../controllers/workoutController");



const router = express.Router() 

app.route('/')
  .get(getAllWorkoutsCtrl)
  .get(getOneWorkoutCtrl)
  .post(createNewWorkoutCtrl)

app.route('/:workoutId')
  .get(getOneWorkoutCtrl)
  .patch(updateOneWorkoutCtrl)
  .delete(deleteOneWorkoutCtrl)

router.get('/:workoutId/records', getRecordForWorkoutCtrl)

router.get('/records')



module.exports = router