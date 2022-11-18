const express = require('express')
const bodyParser = require('body')
const axios = require('axios')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())

app.post('/events', (req, res) => {
    const event = req.body

    axios.post("http://localhost:4000/events", event).catch((err) => {
      console.log(err.message);
    });
    axios.post("http://localhost:4001/events", event).catch((err) => {
      console.log(err.message);
    });
    axios.post("http://localhost:4002/events", event).catch((err) => {
      console.log(err.message);
    });
    res.send({ status: "OK" });
})

const PORT = process.env.PORT || 4005

app.listen(PORT, () => console.log(`Event Bus Listening on PORT - ${PORT}`))