const express =  require('express'),
      cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

app.get('/api', (req, res) => {
  console.log('hit backend')
  res.send({result: 'helloooooo'})
})

app.get('/quit', (req, res) => {
  console.log('hit quit')
  res.send({result: 'goodbyeeeee'})
})

app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`))

