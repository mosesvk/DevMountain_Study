import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0)

  const addHandler = () => {
    setCount(count + 2)
  }

  const reset = () => {
    setCount(count = 0)
  }

  return (
    <>
      <h1>Count</h1>
      <h2>{count}</h2>
      <button onClick={reset} >RESET</button>
      <button onClick={addHandler} >+ 2</button>
    </>
  )
}

export default App;
