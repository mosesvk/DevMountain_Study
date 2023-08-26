import {useState, useEffect} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';


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
            <Card key={user.id} className=''>
              <div className=''>
                <h1 className=''>{user.name}</h1>
              </div>
              <div className=''>
                <h2>{user.username}</h2>
              </div>
            </Card>
          ))}
        </>
    )
}

export default App