import { useState, useEffect } from 'react';

function App() {
  const [todoText, setTodoText] = useState('');
  const [selectedListKey, setSelectedListKey] = useState('defaultList');
  const [lists, setLists] = useState({});
  const [newListName, setNewListName] = useState(''); // Added state to track the new list name input

  // Load data from local storage when the component mounts
  useEffect(() => {
    const storedLists = JSON.parse(localStorage.getItem('lists'));
    if (storedLists) {
      setLists(storedLists);
    }
  }, []);

  // Save data to local storage whenever the "lists" state changes
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

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

  const todoList = lists[selectedListKey]?.todos.map((todo, index) => (
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
    console.log(newListName)
    if (newListName.trim() !== '') {
      const newListKey = Date.now().toString();
      setLists({
        ...lists,
        [newListKey]: { name: newListName, todos: [] }
      });
      setSelectedListKey(newListKey);
      setNewListName(''); // Clear the input field after adding the list
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
              <input
                type='text'
                id='listInput'
                className='rounded-lg border p-2'
                placeholder='Enter a new list name'
              />
              <button
                className='bg-blue-500 text-white p-2 mt-2 rounded-lg'
                onClick={addList}
              >
                Add List
              </button>
              <div className='mt-3' id='listsContainer'>
                {Object.keys(lists).map((listKey) => (
                  <a
                    href='#'
                    key={listKey}
                    className={`block bg-gray-100 p-2 rounded-lg my-1 ${
                      selectedListKey === listKey
                        ? 'bg-blue-500 text-white'
                        : ''
                    }`}
                    onClick={() => setSelectedListKey(listKey)}
                  >
                    {lists[listKey]?.name || ''}{' '}
                    {/* Add the conditional check here */}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className='w-3/4 p-4'>
            {selectedListKey && (
              <div id='currentTodoContainer'>
                <h3 className='text-2xl font-bold mb-4' id='currentListName'>
                {lists[selectedListKey]?.name || ''} 
                </h3>
                <input
                  type='text'
                  id='todoInput'
                  className='rounded-lg border p-2'
                  placeholder='Add a new to-do'
                  value={todoText}
                  onChange={(e) => setTodoText(e.target.value)}
                />
                <button
                  className='bg-blue-500 text-white p-2 mt-2 rounded-lg'
                  id='addTodoButton'
                  onClick={addTodo}
                >
                  Add
                </button>
                <ul className='mt-4' id='currentTodoList'>
                  {todoList}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
