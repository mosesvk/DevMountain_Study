const express = require('express')
const app = express()
const router = express.Router()
const {
  getAllRecordsCtrl,
  getRecordForWorkoutCtrl
} = require('../../controllers/recordController')



app.route('/')
  .get(getAllRecordsCtrl)

app.route('/:workoutId/records')
  .get(getRecordForWorkoutCtrl)


module.exports = app