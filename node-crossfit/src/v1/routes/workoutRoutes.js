const express = require('express')
const router = express.Router() 

router.get('/', (req, res) => {
  res.send('Get All Workouts')
})

router.get('/:workoutId', (req, res) => {
  res.send('Get an Existing Workout')
})

router.post('/', (req, res) => {
  res.send('Create a new Workout')
})

router.patch('/:workoutId', (req, res) => {
  res.send('Update an Existing Workout')
})

router.delete('/:workoutId', (req, res) => {
  res.send('Delete an existing workout')
})

module.exports = router