import React, { useRef } from 'react';

const App = () => {
  const counterRef = useRef(0);

  const increment = () => {
    counterRef.current += 1;
    console.log('Counter:', counterRef.current);
  };

  const decrement = () => {
    counterRef.current -= 1;
    console.log('Counter:', counterRef.current);
  };

  return (
    <div>
      <h1>Counter: {counterRef.current}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
