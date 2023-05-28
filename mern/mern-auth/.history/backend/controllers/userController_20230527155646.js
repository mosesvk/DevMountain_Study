import asyncHandler from 'express-async-handler'

// @desc    Auth user/ set token
// route    POST /api/users/auth
// @access  Public
const authUser = (req, res) => {
    res.status(200).json({ message: `Auth User`})
}

// @desc    Register User
// route    POST /api/users
// @access  Public
const registerUser = (req, res) => {
    res.status(200).json({ message: 'Register User'})
}


// @desc    Logout User
// route    POST /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
    res.status(200).json({ message: 'Logout User'})
}

// @desc    Get User Profile
// route    GET /api/users/profile
// @access  Private
const getUserProfile = (req, res) => {
    res.status(200).json({ message: 'Get User Profile'})
}

// @desc    Update User Profile
// route    PUT /api/users/profile
// @access  Private
const updateUserProfile = (req, res) => {
    res.status(200).json({ message: 'Update User'})
}


export {
    authUser
}