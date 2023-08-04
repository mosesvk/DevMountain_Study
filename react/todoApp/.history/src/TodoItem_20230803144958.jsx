import { useParams } from 'react-router-dom'

const TodoItem = () => {
  const {id} = useParams()



  return (
    <div>todo</div>
  )
}

export default TodoItem