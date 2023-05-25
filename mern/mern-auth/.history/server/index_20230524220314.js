import express from 'express'

const port = process.env.PORT || 5100
const app = express()

app.listen(port, () => console.log(`Server started on port ${port}`))