import { useEffect, useState } from 'react';
import axios from 'axios';

// https://jsonplaceholder.typicode.com/users

const fetchApi = async () => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
  console.log(data)
  return JSON.stringify(data, null, 2)
}

function App() {
  const [users, setUsers] = useState([]);

  
  return (<div>
    <pre>

    </pre>
  </div>);
}

export default App;
