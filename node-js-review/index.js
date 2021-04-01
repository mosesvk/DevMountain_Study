// Require Express
const express = require('express')
//Remember Node.js is NOT a server but Express is. 

// Create an instance of Express and save it to a variable.
const app = express()

// Middleware that parses JSON into JavaScript
app.use(express.json()) //express.json() is what does the parsing 

const movies = [
  {
    id: 1, 
    name: 'Star Wars: Return of the Jedi'
  },
  {
    id: 2, 
    name: 'Fargo'
  }, 
  {
    id: 3, 
    name: 'Interstellar'
  }
]

//Create an endpoint for this data's URL // Remember it's the part AFTER the domain
app.get('/api/movies', (req, res) => { // res is an object of methods
  res.status(200).send(movies) //What is going to show after 'res.data' is requested. So in this case, the array of movies will show up.
}) // the second argument of app.get() or that function is how we actually make this happen 
  
// Create a listen function -> this will tell the server what port to listen for
// 1st parameter is the port, anywhere between 3001 - 8000 
// 2nd parameter is just a callback function that we can use to let us know if it was working or not
const port = 3333
app.listen(port, () => console.log(`Server is running on 3333 ${port}`))

//This is where we turn our servers to an API