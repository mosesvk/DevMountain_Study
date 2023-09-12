import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const getAnimal = () => {
    const animals = ['bird', 'cat', 'cow', 'dog', 'horse']

    return animals[Math.floor(Math.random() * (animals.length - 1))]

  }

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of animals: {count}</div>
    </div>
  );
}

export default App;
