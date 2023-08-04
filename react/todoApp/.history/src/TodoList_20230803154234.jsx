import { useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner } from '@material-tailwind/react'

const TodoList = () => {
  const [todos, setTodos] = useState(null)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(({data}) => {
        const resTodos = data
        setTodos(resTodos)
      })
      .catch(err => console.error(err))
  }, [])

  console.log(todos)
  return (
    <>
      <Spinner />
    </>
  )
}

export default TodoList