import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count</h1>
      <h2>{count}</h2>
      <button>+ 1</button>
    </>
  )
}

export default App;
