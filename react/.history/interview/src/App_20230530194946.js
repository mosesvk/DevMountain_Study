import {useState, useEffect} from 'react'
import axios from 'axios'

//https://jsonplaceholder.typicode.com/users

const fetchApi = async () => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
  return JSON.stringify(data, null, 2)
}

const App = () => {
  const [usersArray, setUsersArray] = useState([])

  const clickHandler = async () => {
    const data = await fetchApi()
    setUsersArray(data)
  }

    return (
        <>
          <button onClick={clickHandler}>fetch api</button>
          {usersArray && <pre>{usersArray}</pre>}
        </>
    )
}

export default App