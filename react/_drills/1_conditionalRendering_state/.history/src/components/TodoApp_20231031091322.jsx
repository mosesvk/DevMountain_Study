import React, { useState } from 'react';

function TodoApp() {
  // Initialize state to manage the list of to-do items
  const [todos, setTodos] = useState([]);
  
  // Initialize state for the current to-do item being edited
  const [todoText, setTodoText] = useState('');

  // Function to add a new to-do item
  const addTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, todoText]);
      setTodoText('');
    }
  };

  // Function to remove a to-do item
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new to-do"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
