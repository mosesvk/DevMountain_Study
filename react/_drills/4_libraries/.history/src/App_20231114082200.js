import React, { useState } from 'react';

const NumberList = ({ numbers }) => {
  const [sum, setSum] = useState(0);

  // Calculate sum whenever the component renders
  const calculateSum = () => {
    const newSum = numbers.reduce((acc, num) => acc + num, 0);
    setSum(newSum);
  };

  return (
    <div>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <p>Total Sum: {sum}</p>
      <button onClick={calculateSum}>Recalculate Sum</button>
    </div>
  );
};

const App = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>Number List</h1>
      <NumberList numbers={numbers} />
    </div>
  );
};

export default App;
