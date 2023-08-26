import { useParams } from 'react-router-dom'

const TodoItem = () => {
  const params = useParams()

  console.log(params)
  return (
    <div>todo</div>
  )
}

export default TodoItem