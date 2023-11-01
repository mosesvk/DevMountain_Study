import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const addTodoHandler = () => {

    const todo = 'newTodo'
    const newTodosArray = [...todos, todo]
    setTodos(newTodosArray)
  }

  const updateTodoValue = () => {

  }

  return (
    <>
      {/* {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))} */}
      <input type='text' value={todo} onChange={(e) => console.log(e.target)} /> 
      <button onClick={addTodoHandler}>Add</button>
    </>

  )
}

export default App;
