import { useState } from 'react';
import './App.css';

function App() {
  const [todoText, setTodoText] = useState('');
  const [selectedListKey, setSelectedListKey] = useState('defaultList');
  const [lists, setLists] = useState({
    defaultList: { name: 'Default List', todos: [] },
  });

  function updateUITodoStatus(todoItem, completed) {
    if (completed) {
      todoItem.classList.add('line-through', 'text-gray-500');
    } else {
      todoItem.classList.remove('line-through', 'text-gray-500');
    }
  }

  function addTodo() {
    if (todoText.trim() !== '') {
      const currentList = lists[selectedListKey];

      const newTodo = { text: todoText, completed: false };
      currentList.todos.push(newTodo);

      setLists({ ...lists });

      setTodoText('');

      updateUITodoStatus(newTodo, false);
    }
  }

  function handleCheckboxChange(todo, e) {
    const completed = e.target.checked;
    todo.completed = completed;
    setLists({ ...lists });
    updateUITodoStatus(todo, completed);
  }

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

  const addList = () => {
    const listName = prompt('Enter a new list name:');
    if (listName && listName.trim() !== '') {
      const newListKey = Date.now().toString();
      setLists({
        ...lists,
        [newListKey]: { name: listName, todos: [] },
      });
      setSelectedListKey(newListKey);
    }
  };

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
        <button onClick={addList}>Add List</button>
        <ul>{todoList}</ul>
      </div>
    </div>
  );
}

export default App;
