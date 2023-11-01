import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const addHandler = () => {
    setCount(count + 2)
    console.log('count', count)
  }
  console.log('count', count)

  return (
    <>
      <h1>Count</h1>
      <h2>{count}</h2>
      <button onClick={addHandler} >+ 2</button>
    </>
  )
}

export default App;
