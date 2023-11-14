// src/App.js

import React, { useState } from 'react';

const Counter = ({ increment }) => {
  console.log('Counter rendering');
  return (
    <div>
      <p>Count: {increment}</p>
      <button onClick={() => increment()}>Increment</button>
    </div>
  );
};

function CounterPrev() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Before useCallback Example</h1>
      <Counter increment={increment} />
    </div>
  );
}

export default CounterPrev;
