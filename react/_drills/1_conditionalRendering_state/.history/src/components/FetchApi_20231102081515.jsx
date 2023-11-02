import { useEffect, useState } from 'react';

// https://jsonplaceholder.typicode.com/todos?_start=2&_limit=5

const Fetch = () => {
  const [dataSet, setDataSet] = useState('');

  const arr = ['one', 'two', 'three', 'four']
  useEffect(() => {
    const apiFetch = () => {
      fetch('https://jsonplaceholder.typicode.com/todos?_start=2&_limit=5')
        .then((res) => res.json())
        .then((data) => {
          setDataSet(data);
        });
    };

    apiFetch();
  }, []);

  return <div>{dataSet}</div>;
};

export default Fetch;
