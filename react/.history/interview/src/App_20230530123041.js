import { useEffect, useState } from 'react';
import axios from 'axios';

const fetchApi = async () => {
  const {data} = await axios.get('https://randomuser.me/api')
  return JSON.stringify(data.results, null, 2)
}

const App = () => {
  const [userArray, setUserArray] = useState([])

  const  handleClick = async () => {
    // get data from api
    const data = await fetchApi()
    const dataJson = await JSON.parse(data)
    // console.log(dataJson)
    setUserArray([])
    const newUser = [...dataJson]
    setUserArray(newUser)
  }


  return (
    <>
      <button onClick={handleClick}>Get New User</button>
      { userArray.map((user) => (
        <>
        <h1>{user.name.first} {user.name.last}</h1>
        <img src={user.picture.thumbnail} alt='userImg' />
        </>
      ))}
    </>
  );
};

export default App;
