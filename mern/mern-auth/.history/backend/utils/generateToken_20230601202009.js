import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  // initialize a token 
  const token = jwt.sign({userId}, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })

  // call the jwt cookie with that token
}