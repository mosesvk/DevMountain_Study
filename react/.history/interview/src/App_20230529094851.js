import { useEffect, useState } from 'react';
import axios from 'axios';

// https://jsonplaceholder.typicode.com/users

function App() {
  const [users, setUsers] = useState([]);

  const fetchApi = async () => {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(users)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  
  return <div></div>;
}

export default App;