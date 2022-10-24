const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const User = require('../models/userModel')

const loginUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body

  if (!email) {
    res.status(404).send({error: 'Email is required'})
  }
  if (!password) {
    res.status(404).send({error: 'Password is required'})
  }
  if (password.length < 6) {
    res.status(500).send({error: 'Password needs to be at least 6 characters long'})
  }

  res.status(200).send({message: 'User successfully logged in', body: req.body})
})


const signupUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)
    res.status(200).json({email, user})
  } catch (err) {
    res.status(400).json({error: err.message})
  }
})

module.exports = {
  loginUser,
  signupUser
}