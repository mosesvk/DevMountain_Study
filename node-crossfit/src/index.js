const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

// testing
app.get('/', (req, res) => {
  res.send('<h2>Its Working!</h2>')
})

app.listen(PORT, () => {
  console.log(`API is listening on ${PORT}`)
})