import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])



  return (
    <>
      {/* {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))} */}
      <input type='text'/> 
    </>

  )
}

export default App;