import React, { useReducer, useState } from 'react';

const initialState = {
  todos: [],
  task: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      if (action.payload.trim() !== '') {
        return {
          todos: [
            ...state.todos,
            { id: state.todos.length + 1, task: action.payload },
          ],
          task: '',
        };
      }
      return state;
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'SET_TASK':
      return { ...state, task: action.payload };
    default:
      return state;
  }
};

const ExampleTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: state.task });
  };

  const removeTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  return (
    <div>
      <h2>Todo App (useReducer)</h2>
      <input
        type="text"
        placeholder="Add a task..."
        value={state.task}
        onChange={(e) => dispatch({ type: 'SET_TASK', payload: e.target.value })}
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
