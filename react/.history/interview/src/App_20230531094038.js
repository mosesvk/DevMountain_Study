import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

//https://jsonplaceholder.typicode.com/users

const fetchApi = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return JSON.stringify(data, null, 2);
};

const CardComponent = ({ user }) => {
  return (
    <div className='card'>
      <h2>{user.name}</h2>
      <h3>{user.username}</h3>
    </div>
  );
};

const NotFoundComponent = () => {
  return (
    <div className='card'>
      <h1>No Users Found</h1>
    </div>
  );
};

const App = () => {
  const [usersArray, setUsersArray] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    fetchApi()
      .then((res) => JSON.parse(res))
      .then((json) => setUsersArray(json));
  }, []);

  const clickHandler = async () => {
    const data = await fetchApi();
    setUsersArray(JSON.parse(data));
  };

  const filteredUsersArray = usersArray.filter((user) => {
    let name = user.name;
    let string = inputRef.current.value;
    return name.toLowerCase().startsWith(string);
  });

  return (
    <div className='App'>
      <div className='header'>
        <input type='text' ref={inputRef} />
        <button onClick={clickHandler}>fetch api</button>
      </div>
      <div className='card-div'>
        {filteredUsersArray.length &&
          filteredUsersArray.map((user) => (
            <CardComponent user={user} key={user.id} />
          ))}
        {!filteredUsersArray.length && inputRef.current && (
          <NotFoundComponent />
        )}
      </div>
    </div>
  );
};

export default App;
