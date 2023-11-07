import React, { useReducer } from 'react';

const initialState = {
  todos: [],
  task: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'addTodo':
      return {
        todos: [
          ...state.todos,
          { id: state.todos.length + 1, task: action.payload }
        ], 
        task: ''
      };
    case 'setTask':
      return {
        ...state,
        task: action.payload
      };
    default:
      return state;
  }
};

const ExampleTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = () => {
    dispatch({ type: 'addTodo', payload: state.task });

  };

  const removeTodo = (id) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo App (useState)</h2>
      <input
        type='text'
        placeholder='Add a task...'
        value={state.task}
        onChange={(e) => dispatch({ type: 'setTask', payload: e.target.value })}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleTwo;
