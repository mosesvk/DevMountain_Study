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
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      // RETURNING makes sure that we are going to return the data. If not, we won't see the data that we just added.
      [description]
    );

    // newTodo will be a large object and you can take a look at it. but we only need the 'row' property from that object
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// get all todos
app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo');

    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a todo by id
app.get('/todos/:id', async (req, res) => {
  try {
    // remember whatever we put in place of '/:id' will be put into the req.params. the :id will mean the property in req.params will be called {id: 'value we put in'}
    // console.log(req.params)

    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [
      id,
    ]);

    res.json(todo.rows[0])
  } catch (err) {
    console.error(err.message);
  }
});

// update a todo

// delete a todo

app.listen(PORT, () => {
  console.log(`server has started on port: ${PORT}`);
});
