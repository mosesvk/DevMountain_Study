import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const addTodoHandler = () => {
    const newTodo = todo
    const newTodosArray = [...todos, newTodo]
    setTodos(newTodosArray)
    setTodo('')
  }

  console.log(todos)

  return (
    <>

      <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} /> 
      <button onClick={addTodoHandler}>Add</button>
      <ul>
        
      </ul>
    </>

  )
}

export default App;
