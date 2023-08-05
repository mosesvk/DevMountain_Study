
const TodoCard = ({todo}) => {
    const {title, userId, completed} = todo 
  return (
    <>
        <h2>{title}</h2>
        <p>user: {userId}</p>
        <p>completed: {completed}</p>
    </>
  )
}

export default TodoCard