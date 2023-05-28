// @desc    Auth / Set Token
// route    POST /api/users/auth     
// @access  Public
const userAuth = (req, res) => {
    res.send(200).json({message: 'Hello World :)'})
}

export {
    userAuth
}