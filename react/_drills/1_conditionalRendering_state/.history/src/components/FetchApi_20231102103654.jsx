import { useEffect, useState } from 'react';

// https://jsonplaceholder.typicode.com/todos?_start=2&_limit=5

const Fetch = () => {
  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {

    const apiFetch = async () => {
      try {
        const data = await fetch(
          'https://jsonplaceholder.typicode.com/todos?_start=2&_limit=5'
        );
        const dataSet = await data.json();
        setDataSet(dataSet);
      } catch (err) {
        console.error(err.message)
      }
    }
      apiFetch();

  }, []);




  return (
    <div>
      <ul>{dataSet.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}</ul>
    </div>
  );
};

export default Fetch;
