import { useEffect, useState } from 'react';

// https://jsonplaceholder.typicode.com/todos?_start=2&_limit=5

const Fetch = () => {
  const [dataSet, setDataSet] = useState('');

  // const arr = [{...}, {...}, {...}]

  // arr.map(item => <li>{item.title}</li>)

  useEffect(() => {
    const apiFetch = async () => {
      // fetch('https://jsonplaceholder.typicode.com/todos?_start=2&_limit=5')
      //   .then((res) => res.json())
      //   .then((data) => {
      //     setDataSet(data);
      //     console.log(data)
      //   });

      const data = await fetch('https://jsonplaceholder.typicode.com/todos?_start=2&_limit=5')
      const dataSet = await data.json()

      setDataSet(JSON.stringify(dataSet))
    };

    apiFetch();
  }, []);

  return <div>
    <ul>
      {}
    </ul>
  </div>;
};

export default Fetch;
