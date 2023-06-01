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

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) { 
        // 'this' keyword refers to the User.create() from the userController
        
        next()
    }

    // generates a key with 10 (or however many... goes up to 20) characters
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})


const User = mongoose.model('User', userSchema)

module.exports = User