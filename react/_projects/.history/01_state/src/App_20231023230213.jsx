import { useState } from 'react';
import './App.css';

function App() {
  // Define state variables for the input and lists
  const [todoText, setTodoText] = useState('');
  const [selectedListKey, setSelectedListKey] = useState('defaultList');
  const [lists, setLists] = useState({
    defaultList: { name: 'Default List', todos: [] },
  });

  // Function to update the UI with todo completion status
  function updateUITodoStatus(todoItem, completed) {
    if (completed) {
      todoItem.classList.add('line-through', 'text-gray-500');
    } else {
      todoItem.classList.remove('line-through', 'text-gray-500');
    }
  }

  // Function to add a new todo
  function addTodo() {
    if (todoText.trim() !== '') {
      const currentList = lists[selectedListKey];

      const newTodo = { text: todoText, completed: false };
      currentList.todos.push(newTodo);

      // Update the state of lists
      setLists({ ...lists });

      // Clear the input field
      setTodoText('');

      // Update the UI with completed status
      updateUITodoStatus(newTodo, false);
    }
  }

  // Function to handle checkbox change
  function handleCheckboxChange(todo, e) {
    const completed = e.target.checked;
    todo.completed = completed;
    // Update the state of lists
    setLists({ ...lists });

    // Update the UI with completed status
    updateUITodoStatus(todo, completed);
  }

  // Render todo items
  const todoList = lists[selectedListKey].todos.map((todo, index) => (
    <li
      key={index}
      className={`flex items-center justify-between bg-gray-100 p-2 rounded-lg my-1 hover:bg-gray-200 text-gray-800 hover:text-black transition-colors ${todo.completed ? 'line-through text-gray-500' : ''}`}
    >
      <input
        type="checkbox"
        className="mr-2"
        checked={todo.completed}
        onChange={(e) => handleCheckboxChange(todo, e)}
      />
      {todo.text}
    </li>
  ));

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Add a new todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div>
        <ul>{todoList}</ul>
      </div>
    </div>
  );
}

export default App;
