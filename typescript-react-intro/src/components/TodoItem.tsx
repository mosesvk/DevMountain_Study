import React from 'react'
import {Todo} from '../model'

interface Props {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem: React.FC<Props> = ({todo, todos, setTodos}) => {
  return (
    <form className='todos__single'>
      <span className="todos__single--text">{todo.todo}</span>

      <div>
        
      </div>
    </form>
  )
}

export default TodoItem