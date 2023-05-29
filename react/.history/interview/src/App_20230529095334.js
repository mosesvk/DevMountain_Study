import { useEffect, useState } from 'react';
import axios from 'axios';

// https://jsonplaceholder.typicode.com/users

function App() {
  const [users, setUsers] = useState([]);

  const fetchApi = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data)
    setUsers(data)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  
  return (<div>
    <pre>
      
    </pre>
  </div>);
}

export default App;
