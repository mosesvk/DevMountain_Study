import { useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css';

const getRandomAnimal = () => {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'heart', 'horse']

  const randomIndex = Math.floor(Math.random() * animals.length)

  return animals[randomIndex]
}

function App() {
  const [animals, setAnimals] = useState([])

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  const renderedAnimals = animals.map((animal, idx) => (
    <AnimalShow animal={animal} />
  ))

  return (
    <div className="App">
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
    </div>
  );
}

export default App;
