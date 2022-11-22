const express = require('express')
const app = express();
app.use(express.urlencoded({extended: true}))

app.get('/bmicalculator', (req ,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/bmicalculator', (req, res) => {
    const weight = Number(req.body.weight)
    const height = Number(req.body.height)
    
    const result = (weight / Math.pow(height, 2)) * 703

    console.log(weight, height, result)

    res.send(`Result is ${result.toFixed(2)}`)

})


app.listen(3000, () => {
    console.log('Listening on Port 3000')
})