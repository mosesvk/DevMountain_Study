// import { useParams } from 'react-router-dom'

const TodoItem = ({todos}) => {

  // const {id} = useParams()

  return (
    <ul>
    {todos.map(({title, id, userId}) => (
      <div key={id}>
        <h2>{title}</h2>
        <p>userId: {userId}</p>
      </div>
    ))}
  </ul>
  )
}

export default TodoItem