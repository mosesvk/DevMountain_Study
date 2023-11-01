import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const addTodoHandler = () => {
    const newTodo = todo
    const newTodosArray = [...todos, newTodo]
    setTodos(newTodosArray)
  }


  return (
    <>
      {/* {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))} */}
      <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} /> 
      <button onClick={addTodoHandler}>Add</button>
    </>

  )
}

export default App;
