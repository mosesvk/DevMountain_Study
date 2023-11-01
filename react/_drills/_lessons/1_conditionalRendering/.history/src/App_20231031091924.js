import { useState } from 'react';

function App() {

  const todos = ['milk', 'eggs', 'salad']

  return (
    <>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </>
  )
}

export default App;
