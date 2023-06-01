import {useState, useEffect} from 'react'
import axios from 'axios'

//https://jsonplaceholder.typicode.com/users

const fetchApi = async () => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
  return JSON.stringify(data, null, 2)
}

const App = () => {

  const clickHandler = async () => {
    const data = await fetchApi()
    console.log(data)
  }

    return (
        <>
          <button onClick={clickHandler}>fetch api</button>
        </>
    )
}

export default App