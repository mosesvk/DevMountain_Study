import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import {notFound, errorHandler} from './middleware/errorHandler.js'
import connectDB from './config/db.js'
const port = process.env.PORT 
import userRoutes from './routes/userRoutes.js'

// connectDB()

const app = express()

app.use('/api/users', userRoutes)

app.get('/', (req, res) => res.send('Server is ready'))

// error middleware
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))