import asyncHandler from 'express-async-handler';

// @desc    Auth / Set Token
// route    POST /api/users/auth
// @access  Public
const userAuth = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error('Something went wrong');
  res.status(200).json({ message: 'Hello World :)' });
});

// @desc    Register New User
// route    POST /api/users
// @access  Public
const userRegister = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error('Something went wrong');
  res.status(200).json({ message: 'Register User' });
});

// @desc    Logout User
// route    POST /api/users/logout
// @access  Private
const userLogout = asyncHandler(async (req, res) => {
    res.status(401);
    throw new Error('Something went wrong');
    res.status(200).json({ message: 'Hello World :)' });
  });

// @desc    Get User Profile
// route    GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error('Something went wrong');
  res.status(200).json({ message: 'User Profile' });
});

// @desc    Update User Profile
// route    PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error('Something went wrong');
  res.status(200).json({ message: 'Auth' });
});

export { userAuth, userLogin, userLogout, userRegister };
