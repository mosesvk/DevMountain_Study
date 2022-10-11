import React from 'react'
import {Todo} from '../model'
import './styles.css'
import TodoItem from './TodoItem'


interface Props {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
      {todos.map(todo => (
        <TodoItem 
          todo={todo} 
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  )
}

export default TodoList