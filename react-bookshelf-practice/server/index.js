// const express = require('express')
// const bc = require('./controller/books_controller.js')

// const app = express

// app.use(express.json())

// app.get('/api/books', bc.read)
// app.post('/api/books', bc.create)
// app.put('/api/books/:id', bc.update)
// app.delete('/api/books/:id',bc.delete)


// port = 4900
// app.listen(port, (req, res) => {
//   console.log(`Server listening on port ${port}`)
// })

const express = require("express");
const bc = require("./controller/books_controller.js");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../build"));

app.get("/api/books", bc.read);
app.post("/api/books", bc.create);
app.put("/api/books/:id", bc.update);
app.delete("/api/books/:id", bc.delete);

const port = 4900;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});