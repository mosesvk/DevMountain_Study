import { useEffect, useState } from 'react';

// https://jsonplaceholder.typicode.com/todos?_start=2&_limit=5

const Fetch = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const apiFetch = () => {
      fetch('https://jsonplaceholder.typicode.com/todos?_start=2&_limit=5')
      .then((res) => res.json())
      .then((data) => console.log(data)); 
    }

    apiFetch()
  }, [])



  return <div></div>;
};

export default Fetch;
