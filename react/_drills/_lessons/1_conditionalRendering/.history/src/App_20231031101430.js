import { useState } from 'react';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const addTodoHandler = () => {
    const newTodo = todo;
    const newTodosArray = [...todos, newTodo];
    setTodos(newTodosArray);
    setTodo('');
  };

  console.log(todos);

  return (
    <>
      <input
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodoHandler}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
