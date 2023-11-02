import { useEffect, useState } from 'react';

// https://jsonplaceholder.typicode.com/todos?_start=2&_limit=5

const Fetch = () => {
  const [dataSet, setDataSet] = useState([]);
  const [user, setUser] = useState('')

  useEffect(() => {

    console.log('hit useEffect')

  }, []);




  return (
    <div>

    </div>
  );
};

export default Fetch;
