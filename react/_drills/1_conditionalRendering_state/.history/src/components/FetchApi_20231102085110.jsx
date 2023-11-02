import { useEffect, useState } from 'react';

// https://jsonplaceholder.typicode.com/todos?_start=2&_limit=5

const Fetch = () => {
  const [dataSet, setDataSet] = useState([]);
  const [user, setUser] = useState('')

  useEffect(() => {

    

  }, [user]);




  return (
    <div>
      <ul>{dataSet.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}</ul>
    </div>
  );
};

export default Fetch;
