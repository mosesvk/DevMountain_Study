import {useState} from 'react'

const ExampleTwo = () => {
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
          setIsLoading(false); // Problem: Setting 'isLoading' after setting 'error'
        }
      }, 1000);
    };
  
    return (
      <div>
        <p>Loading: {isLoading ? 'Yes' : 'No'}</p>
        <p>Error: {error ? error.message : 'No error'}</p>
        <button onClick={fetchData}>Fetch Data</button>
      </div>
    );
}

export default ExampleTwo