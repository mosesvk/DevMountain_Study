import { useState } from 'react';

function App() {

  const todos = ['milk', 'eggs', 'salad']

  return (
    <>
      {todos.map(todo => (
        <li>{todo}</li>
      ))}
    </>
  )
}

export default App;
