import { useEffect, useState } from 'react';

// https://jsonplaceholder.typicode.com/todos?_start=2&_limit=5

const Fetch = () => {
  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {
    const apiFetch = async () => {
      const data = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_start=2&_limit=5'
      );
      const dataSet = await data.json();
      console.log(dataSet);
      setDataSet(dataSet);
    };

    apiFetch();
  }, []);

  return (
    <div>
      <ul>{dataSet.map(item => (
        <li>{item.title}</li>
      ))}</ul>
    </div>
  );
};

export default Fetch;
