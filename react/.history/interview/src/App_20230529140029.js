import { useEffect, useState } from 'react';
import axios from 'axios';

// https://jsonplaceholder.typicode.com/users

const fetchApi = async () => {
  const { data } = await axios.get('https://randomuser.me/api');
  // console.log(data.results[0])
  return JSON.stringify(data.results, null, 2)
};

function App() {
  const [users, setUsers] = useState([]);


  const buttonApiCall = async () => {
    const data = await fetchApi();
    const dataJson = JSON.parse(data)
    setUsers([])
    const newUserArray = [...dataJson]
    setUsers(newUserArray);
  };


  const handleClick = () => {
    console.log('handlClick')
  }

  return (
    <div>
      <button onClick={buttonApiCall}>Send Data</button>
      <button onClick={handleClick}>TEST</button>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name.last}, {user.name.first}</h3>
          <img src={user.picture.thumbnail} alt='dataImg'/>
        </div>
      ))}
    </div>
  );
}

export default App;
