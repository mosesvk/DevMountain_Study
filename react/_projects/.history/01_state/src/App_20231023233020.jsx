import { useState } from 'react';
import './App.css';

function App() {
  const [todoText, setTodoText] = useState('');
  const [selectedListKey, setSelectedListKey] = useState('defaultList');
  const [lists, setLists] = useState({
    defaultList: { name: 'Default List', todos: [] }
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
        type='checkbox'
        className='mr-2'
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
        [newListKey]: { name: listName, todos: [] }
      });
      setSelectedListKey(newListKey);
    }
  };

  return (
    <div className='outer'>
      <nav className='bg-blue-500 p-4'>
        <a className='text-white text-xl' href='#'>
          Todo App
        </a>
      </nav>
      <div className='container mx-auto'>
        <div className='flex'>
          <div className='w-1/4 p-4'>
            <div className='flex flex-col'>
              {/* Input box on the left */}
              <input
                type='text'
                id='listInput'
                className='rounded-lg border p-2'
                placeholder='Enter a new list name'
              />
              {/* "Add" button to add lists */}
              <button
                className='bg-blue-500 text-white p-2 mt-2 rounded-lg'
                id='addListButton'
              >
                Add List
              </button>
              {/* List of todo lists */}
              <div className='mt-3' id='listsContainer'>
                {/* Dummy list items (generated dynamically with JavaScript) */}
                <a href='#' className='block bg-gray-100 p-2 rounded-lg my-1'>
                  List 1
                </a>
              </div>
            </div>
          </div>
          <div className='w-3/4 p-4'>
            {/* Current todo list container */}
            <div className='hidden' id='currentTodoContainer'>
              <h3 className='text-2xl font-bold mb-4' id='currentListName'></h3>
              {/* Input box for adding new to-dos */}
              <input
                type='text'
                id='todoInput'
                className='rounded-lg border p-2'
                placeholder='Add a new to-do'
              />
              {/* "Add" button to add to-dos */}
              <button
                className='bg-blue-500 text-white p-2 mt-2 rounded-lg'
                id='addTodoButton'
              >
                Add
              </button>
              {/* Container for displaying current to-dos (generated dynamically with JavaScript) */}
              <ul className='mt-4' id='currentTodoList'></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
