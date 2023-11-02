import { useEffect, useState } from 'react';

// https://jsonplaceholder.typicode.com/todos?_start=2&_limit=5

const Fetch = () => {
  const [data, setData] = useState('');

  fetch('https://jsonplaceholder.typicode.com/todos?_start=2&_limit=5')
    .then((res) => console.log(res.json()))
    .then((data) => console.log(data)); 

  return <div></div>;
};

export default Fetch;
