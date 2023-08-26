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

const CardComponent = () => {

  return (
    <div className='card' key={user.id}>
    <h2>{user.name}</h2>
    <h3>{user.username}</h3>
  </div>
  )
}

const App = () => {
  const [usersArray, setUsersArray] = useState([]);

  const clickHandler = async () => {
    const data = await fetchApi();
    setUsersArray(JSON.parse(data));
  };

  // const filteredUsersArray = usersArray.filter(user => (

  // ))

  return (
    <div className='App'>
      <button onClick={clickHandler}>fetch api</button>
      <div className='card-div'>
        {usersArray.map((user) => (
          <CardComponent user={user}/>
        ))}
      </div>
    </div>
  );
};

export default App;
