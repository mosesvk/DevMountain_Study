import { useEffect, useState } from 'react';
import axios from 'axios';

const fetchApi = async () => {
  const user = await axios.get('https://randomuser.me/api')
  console.log(user)
}

const App = () => {
  const [userArray, setUserArray] = useState([])

  const  handleClick = () => {
    // get data from api
    
    fetchApi()
  }

  return (
    <>
      <button onClick={handleClick}>Get New User</button>
      <></>
    </>
  );
};

export default App;
