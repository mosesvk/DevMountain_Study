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

  useEffect(() => {
    const data = fetchApi()
    setUsersArray(JSON.parse(data))
  }, [])
  
  // const clickHandler = async () => {
  //   const data = await fetchApi()
  //   setUsersArray(JSON.parse(data))
  // }

    return (
        <>
          {/* <button onClick={clickHandler}>fetch api</button> */}
          {usersArray.map((user) => (
            <Card key={user.id} className=''>
              <Card.Body className=''>
                <Card.Title>{user.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </>
    )
}

export default App