import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 5100

const app = express()


app.listen(port, () => console.log(`Server Starting on Port 5100`))