import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const User = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true, 
        unique: true
    }, 
    name: {
        type: String,
        required: true
    }, 
}, {
    timestamps: true
})

export default User