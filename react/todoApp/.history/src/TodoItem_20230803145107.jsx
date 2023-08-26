import { useParams } from 'react-router-dom'

const TodoItem = () => {
  const {id} = useParams()

  return (
    <>
      <h1>Todo Item: {id}</h1>
    </>
  )
}

export default TodoItem