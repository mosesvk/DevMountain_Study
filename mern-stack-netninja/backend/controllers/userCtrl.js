const asyncHandler = require('express-async-handler');
require('dotenv').config();
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

const loginUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    const token = createToken(user._id)

    res.status(200).send({email, token})
  } catch (err) {
    res.status(400).send({error: err.message})
  }
})


const signupUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)

    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (err) {
    res.status(400).json({error: err.message})
  }
})

module.exports = {
  loginUser,
  signupUser
}