import { useState } from 'react';
import './App.css';

function App() {
  const [animals, setAnimals] = useState([]);

  const getAnimal = () => {
    const animals = ['cow', 'dog', 'cat', 'horse', 'bird', 'gator'];

    return animals[Math.floor(Math.random() * (animals.length - 1))];
  };

  const handleClick = () => {
    setAnimals([...animals, getAnimal()]);
  };

  return (
    <>
      <button onClick={handleClick}>Add Animal</button>
      <div>
        {animals?.map((item) => (
          <>
            <p>{item}</p>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
