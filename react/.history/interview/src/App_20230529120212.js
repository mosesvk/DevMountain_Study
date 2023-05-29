import { useEffect, useState } from 'react';
import axios from 'axios';

// https://jsonplaceholder.typicode.com/users

const fetchApi = async () => {
  const {data} = await axios.get('https://randomuser.me/api')
  console.log(data.results)
  return JSON.stringify(data.results, null, 2)
}

function App() {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dataImg, setDataImg] = useState('')

  const buttonApiCall = async () => {
    const data = await fetchApi()
    setUsers(data)
    console.log(data[0])

  }
  
  return (<div>
    <button onClick={buttonApiCall}>Send Data</button>
    <pre>
      {users}
    </pre>
  </div>);
}

export default App;
