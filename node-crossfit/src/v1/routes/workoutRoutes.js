const express = require('express')
const {
  getAllCtrl,
  getOneCtrl,
  createNewCtrl,
  updateOneCtrl,
  deleteOneCtrl,
} = require("../../controllers/workoutController");

const router = express.Router() 

router.get('/', getAllCtrl)

router.get('/:workoutId', getOneCtrl)

router.post('/', createNewCtrl)

router.patch('/:workoutId', updateOneCtrl)

router.delete('/:workoutId', deleteOneCtrl)

module.exports = router