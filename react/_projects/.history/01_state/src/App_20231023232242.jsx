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
      className={`flex items-center justify-between bg-gray-100 p-2 rounded-lg my-1 hover:bg-gray-200 text-gray-800 hover:text-black transition-colors ${
        todo.completed ? 'line-through text-gray-500' : ''
      }`}
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
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:px-10">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Todo List</h2>
        <div className="mt-8 space-y-6">
          <div className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Add a new todo"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
              />
            </div>
            <button
              onClick={addTodo}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add
            </button>
          </div>
          <div>
            <button
              onClick={addList}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Add List
            </button>
          </div>
          <div>
            <ul className="divide-y divide-gray-300">{todoList}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
