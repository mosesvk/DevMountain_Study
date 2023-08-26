import { useEffect, useState } from 'react';
import axios from 'axios';

const fetchApi = async () => {
  const {data} = await axios.get('https://randomuser.me/api')
  return JSON.stringify(data.results[0], null, 2)
}

const App = () => {
  const [userArray, setUserArray] = useState([])

  const  handleClick = async () => {
    // get data from api
    const data = await fetchApi()
    const dataJson = await JSON.parse(data)
    console.log(dataJson)
    // const newUser = [...dataJson]
    // setUserArray(newUser)
  }

  // console.log(userArray)

  return (
    <>
      <button onClick={handleClick}>Get New User</button>

    </>
  );
};

export default App;
