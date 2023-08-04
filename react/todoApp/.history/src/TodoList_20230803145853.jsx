import { useEffect, useState } from 'react'
import axios from 'axios'

const TodoList = () => {
  const [todos, setTodos] = useState(null)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        const resTodos = res.data
        setTodos(resTodos)
      })
  }, [])
  return (
    <div>{todos}</div>
  )
}

export default TodoList