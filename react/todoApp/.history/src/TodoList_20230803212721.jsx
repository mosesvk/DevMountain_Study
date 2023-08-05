import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './components/Spinner'
import TodoItem from './TodoItem'
import TodoCard from './TodoCard'

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

  return (
    <div>
      {todos ? (
        todos.map((todo, idx) => <TodoCard todo={todo} key={idx}/>)
      ) : (<Spinner />)}
    </div>
  )
}

export default TodoList