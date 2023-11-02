import { useEffect } from 'react';

// https://jsonplaceholder.typicode.com/todos?_start=2&_limit=5

const Fetch = () => {

  fetch('https://jsonplaceholder.typicode.com/todos?_start=2&_limit=5').then(res => console.log(res))

  return <div></div>;
};

export default Fetch;
