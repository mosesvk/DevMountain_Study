const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

const PORT = process.env.API_PORT || 5000;

//middleware
app.use(cors());
app.use(express.json()); //req.body

// ROUTES //
// create a todo
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1)',
      [description]
    );

    res.json(newTodo)
  } catch (err) {
    console.error(err.message);
  }
});
// get all todos

// get a todo

// update a todo

// delete a todo

app.listen(PORT, () => {
  console.log(`server has started on port: ${PORT}`);
});
