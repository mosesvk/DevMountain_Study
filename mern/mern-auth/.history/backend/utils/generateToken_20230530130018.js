import jwt from 'jsonwebtoken'

const generateToken = (res, usedrId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET)
}