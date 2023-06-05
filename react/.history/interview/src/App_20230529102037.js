import { useE+ffect, useState } from 'react';
import axios from 'axios';

// https://jsonplaceholder.typicode.com/users

const fetchApi = async () => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
  console.log(data)
  return JSON.stringify(data, null, 2)
}

function App() {
  const [users, setUsers] = useState([]);

  const buttonApiCall = async () => {
    const data = await fetchApi()
    setUsers(data)
  }
  
  return (<div>
    <button onClick={buttonApiCall}>Send Data</button>
    <pre>
      {users}
    </pre>
  </div>);
}

export default App;