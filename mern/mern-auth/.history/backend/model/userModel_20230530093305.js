import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
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

const User = mongoose.model('User', userSchema)