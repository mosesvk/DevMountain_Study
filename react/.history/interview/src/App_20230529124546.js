import { useEffect, useState } from 'react';
import axios from 'axios';

// https://jsonplaceholder.typicode.com/users

const fetchApi = async () => {
  const { data } = await axios.get('https://randomuser.me/api');
  // console.log(data.results[0])
  return JSON.stringify(data.results[0], null, 2);
};

function App() {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dataImg, setDataImg] = useState('');
  const [showData, setShowData] = useState(false);

  const buttonApiCall = async () => {
    const data = await fetchApi();
    setUsers(data);
    setFirstName(data.name.first);
    setLastName(data.name.last);
    setDataImg(data.picture.thumbnail);
    setShowData(!showData)
  };

  return (
    <div>
      <button onClick={buttonApiCall}>Send Data</button>
      {showData && (
        <>
          <h1>{lastName}</h1>
          <h2>{firstName}</h2>
          <img src={dataImg} alt='img' />
        </>
      )}
    </div>
  );
}

export default App;
