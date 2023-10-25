import { useState } from 'react';
import List from './components/List';
import Todo from './components/Todo';

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
            <Todo selectedListKey={selectedListKey} lists={lists} setTodoText={setTodoText} todoText={todoText} addTodo={addTodo} handleItemClick={handleItemClick} handleCheckboxChange={handleCheckboxChange} deleteTodo={deleteTodo} selectedListItemIndex={selectedListItemIndex}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
