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
    setUsersArray(JSON.parse(data))
  }

    return (
        <>
          <button onClick={clickHandler}>fetch api</button>
          {usersArray.map((user) => (
            <div key={user.id} className='max-w-sm rounded overflow-hidden shadow-lg'>
              <div className='px-6 py-4'>
                <h1 className='font-bold text-xl mb-2'>{user.name}</h1>
              </div>
              <div className='px-6 pt-4 pb-2'>
                <h2>{user.username}</h2>
              </div>
            </div>
          ))}
        </>
    )
}

export default App