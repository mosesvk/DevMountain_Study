// src/App.js

import React, { useState, useCallback } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Using useCallback to memoize the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
