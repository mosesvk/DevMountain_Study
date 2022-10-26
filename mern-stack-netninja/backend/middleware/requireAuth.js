const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({error: 'Authorization token required'})
  }

  // the token will look like --> 'bearer kdjafpkdajflak' 
  // so we want the 2nd part of that string. hence the .split(' ')[1]
  const token = authorization.split(' ')[1]

  try {
    const { _id } = jwt.verify(token, process.env.SECRET)

    req.user = await User.findOne({ _id }).select('_id') // we are only retrieving the id... if we didn't have '.select('_id')' then we would've gotten the WHOLE object pertaining to the id... but instead we are just getting the id property. 
    
    next()

  } catch (error) {
    console.log(error)
    res.status(401).json({error: 'Request is not authorized'})
  }
}

module.exports = requireAuth