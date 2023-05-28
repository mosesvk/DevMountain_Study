import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const port = process.env.PORT || 5100
import userRoutes from './routes/userRoutes.js'

const app = express()

app.use('/api/users', userRoutes)

app.get('/', (req, res) => res.send('Server is ready'))

app.listen(port, () => console.log(`Server Starting on Port ${port}`))