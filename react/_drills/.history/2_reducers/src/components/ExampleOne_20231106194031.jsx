import { useState } from 'react';

const ExampleOne = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setIsLoading(true);
    setError(null);

    // Simulating an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      if (Math.random() > 0.5) {
        setError(new Error("Data fetch failed"));
      } else {
        setCount(count + 1);
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Loading: {isLoading ? 'Yes' : 'No'}</p>
      <p>Error: {error ? error.message : 'No error'}</p>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default ExampleOne;
