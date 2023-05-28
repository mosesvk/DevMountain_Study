// @desc    Auth user/ set token
// route    POST /api/users/auth
// @access  Public
const authUser = (req, res) => {
    res.status(200).json({ message: `Auth User`})
}

// @desc    Register User
// route    POST /api/users
// @access  Public


// @desc    Logout User
// route    POST /api/users/logout
// @access  Public


// @desc    Get User Profile
// route    GET /api/users/profile
// @access  Private


// @desc    Update User Profile
// route    PUT /api/users/profile
// @access  Private

export {
    authUser
}