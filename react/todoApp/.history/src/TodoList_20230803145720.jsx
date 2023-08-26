import { useEffect } from 'react'
import axios from 'axios'

const TodoList = () => {
  useEffect((
    axios.get('https://jsonplaceholder.typicode.com/todos')
  ) => {}, [])
  return (
    <div>all todos</div>
  )
}

export default TodoList