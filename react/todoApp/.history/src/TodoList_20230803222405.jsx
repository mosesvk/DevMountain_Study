import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './components/Spinner'
import TodoCard from './TodoCard'

const TodoList = () => {
  const [todos, setTodos] = useState(null)

  // https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5
  useEffect(() => {
    const randNum = Math.random() * 100
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(({data}) => {
        const resTodos = data
        setTodos(resTodos)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      {todos ? (
        todos.map((todo, idx) => <TodoCard todo={todo} key={idx}/>)
      ) : (<Spinner />)}
    </div>
  )
}

export default TodoList