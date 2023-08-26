import mongoose from 'mongoose'

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${process.env.MONGO_URI}`)
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

export default connectDB