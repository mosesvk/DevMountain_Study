import { useEffect, useState } from 'react';
import axios from 'axios';

const fetchApi = async () => {
  const {data} = await axios.get('https://randomuser.me/api')
  return JSON.stringify(data.results[0], null, 2)
}

const App = () => {
  const [userArray, setUserArray] = useState([])

  const  handleClick = () => {
    // get data from api
    const data = fetchApi()
    const dataJson = JSON.parse(data)
    console.log(dataJson)
  }

  return (
    <>
      <button onClick={handleClick}>Get New User</button>
      <></>
    </>
  );
};

export default App;
