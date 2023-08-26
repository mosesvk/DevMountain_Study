import {useState, useEffect} from 'react'
import axios from 'axios'

//https://jsonplaceholder.typicode.com/users

const fetchApi = async () => {
  const users = await axios.get('https://jsonplaceholder.typicode.com/users')
  console.log(users)
}

const App = () => {

    return (
        <>
          <button onClick={fetchApi}>fetch api</button>
        </>
    )
}

export default App