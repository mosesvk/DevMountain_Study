import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 5100
import userRoutes from './routes/userRoutes.js'

const app = express()


app.use('/api', userRoutes)

app.listen(port, () => console.log(`Server starting at port ${port}`))