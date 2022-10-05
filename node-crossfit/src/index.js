const express = require('express')
const v1Router = require('./v1/routes')

const app = express()
const PORT = process.env.PORT || 3000

// connecting to our router in 'v1/routes/index.js
app.use('/api/v1', v1Router)

app.listen(PORT, () => {
  console.log(`API is listening on ${PORT}`)
})