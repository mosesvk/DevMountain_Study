import { useState } from 'react';
import './App.css';
import Animal from './Animal';

function App() {
  const [animals, setAnimals] = useState([]);

  const getRandomAnimal = () => {
    const animals = ['cow', 'dog', 'cat', 'horse', 'bird', 'gator'];

    return animals[Math.floor(Math.random() * (animals.length - 1))];
  };

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);

    // animals.push(getRandomAnimal())
      // -> this is not good because it modifies a piece of state
  };

  const renderedAnimals = animals?.map((animal, idx) => (
    <Animal key={idx} type={animal} />
  ))

  return (
    <>
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>
        {renderedAnimals}
      </div>
    </>
  );
}

export default App;
