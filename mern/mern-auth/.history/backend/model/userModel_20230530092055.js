import mongoose from 'mongoose'

const User = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true, 
        unique
    }, 
    name: {
        type: String,
        required: true
    }, 
})