import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

//https://jsonplaceholder.typicode.com/users

const fetchApi = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return JSON.stringify(data, null, 2);
};

const App = () => {
  const [usersArray, setUsersArray] = useState([]);

  const clickHandler = async () => {
    const data = await fetchApi();
    setUsersArray(JSON.parse(data));
  };

  return (
    <div className='App'>
      <button onClick={clickHandler}>fetch api</button>
      <>
        {usersArray.map((user) => (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <h3>{user.username}</h3>
            </div>
        ))}
      </>
    </div>
  );
};

export default App;
