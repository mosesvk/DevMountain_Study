import express from 'express'
const port = process.env.PORT || 5100

const app = express()

//middleware
app.get('/', (req, res) => res.send('Server is ready'))

app.listen(port, () => console.log(`Server started on port ${port}`))