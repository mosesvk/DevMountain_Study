import express from 'express'

const app = express();

const PORT = process.env.API_PORT || 5000

app.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`)
})