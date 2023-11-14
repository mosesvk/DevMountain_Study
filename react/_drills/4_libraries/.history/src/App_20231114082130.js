import React, { useState, useMemo } from 'react';

const NumberList = ({ numbers }) => {
  // Calculate sum only when the numbers array changes
  const sum = useMemo(() => numbers.reduce((acc, num) => acc + num, 0), [numbers]);

  return (
    <div>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <p>Total Sum: {sum}</p>
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
