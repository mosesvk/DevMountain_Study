import asyncHandler from 'express-async-handler'

// @desc    Auth / Set Token
// route    POST /api/users/auth     
// @access  Public
const userAuth = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Hello World :)'})
})

export {
    userAuth
}