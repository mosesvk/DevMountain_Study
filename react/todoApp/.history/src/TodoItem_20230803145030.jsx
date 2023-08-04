import { useParams } from 'react-router-dom'

const TodoItem = () => {
  const {id} = useParams()

  return (
    <div>todo Item: ${id} </div>
  )
}

export default TodoItem