import { useState } from 'react';
import ListItem from './components/ListItem';
import List from './components/List';

function App() {
  const [todoText, setTodoText] = useState('');
  const [selectedListKey, setSelectedListKey] = useState(null);
  const [lists, setLists] = useState({});
  const [newListName, setNewListName] = useState(''); // Added state to track the new list name input
  const [selectedListItemIndex, setSelectedListItemIndex] = useState(null);

  function updateUITodoStatus(todoItem, completed) {
    if (todoItem && todoItem.classList) {
      if (completed) {
        todoItem.classList.add('line-through', 'text-gray-500');
      } else {
        todoItem.classList.remove('line-through', 'text-gray-500');
      }
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

  function deleteTodo(index) {
    const currentList = lists[selectedListKey];
    const todoToDelete = currentList.todos[index];
    if (todoToDelete) {
      currentList.todos.splice(index, 1);
      setLists({ ...lists });
    }
  }

  function handleCheckboxChange(todo, e) {
    const completed = e.target.checked;
    todo.completed = completed;
    setLists({ ...lists });
    updateUITodoStatus(todo, completed);
  }

  const handleItemClick = (selectedListKey, index) => {
    // Update the selected list item in your component's state
    setSelectedListKey(selectedListKey); // Assuming you have a state variable and a setter function for selectedListKey
    setSelectedListItemIndex(index); // Assuming you have a state variable and a setter function for selectedListItemIndex
  };

  const todoList = lists[selectedListKey]?.todos.map((todo, index) => (
    <li
      key={index}
      className={`flex items-center justify-between p-2 rounded-lg my-1 text-gray-800 transition-colors ${
        todo.completed ? 'line-through text-gray-500' : ''
      }
      ${
        selectedListKey === selectedListKey && index === selectedListItemIndex
          ? 'bg-blue-200'
          : 'bg-gray-100'
      }
      `}
      onClick={() => handleItemClick(selectedListKey, index)}
    >
      <input
        type='checkbox'
        className='mr-2'
        checked={todo.completed}
        onChange={(e) => handleCheckboxChange(todo, e)}
      />
      {todo.text}
      <button onClick={() => deleteTodo(index)} className='text-red-500 ml-2'>
        Delete
      </button>
    </li>
  ));

  const addList = () => {
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

  function deleteList(listKey) {
    const updatedLists = { ...lists };
    delete updatedLists[listKey];
    setLists(updatedLists);

    // If the deleted list was the currently selected list, clear the selection
    if (selectedListKey === listKey) {
      setSelectedListKey(null);
    }
  }

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
            <List
              newListName={newListName}
              setNewListName={setNewListName}
              addList={addList}
              lists={lists}
              selectedListKey={selectedListKey}
              setSelectedListKey={setSelectedListKey}
              deleteList={deleteList}
            />
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
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      addTodo();
                    }
                  }}
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
