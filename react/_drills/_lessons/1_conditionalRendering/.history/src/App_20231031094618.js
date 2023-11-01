import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const addTodoHandler = () => {

    const todo = 'newTodo'
    const newTodosArray = [...todos, todo]
    setTodos(newTodosArray)
  }

  console.log('todo', todo)
  return (
    <>
      {/* {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))} */}
      <input type='text' onChange={(e) => setTodo(e.target.value)} /> 
      <button onClick={addTodoHandler}>Add</button>
    </>

  )
}

export default App;
