import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()


app.listen(5100, () => console.log(`Server Starting on Port 5100`))