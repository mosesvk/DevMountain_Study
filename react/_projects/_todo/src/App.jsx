import { useState } from 'react';
import List from './components/List';
import Todo from './components/Todo';

function App() {
  const [selectedListKey, setSelectedListKey] = useState(null);
  const [lists, setLists] = useState({});
  const [newListName, setNewListName] = useState('');
  const [todoText, setTodoText] = useState('');
  const [selectedListItemIndex, setSelectedListItemIndex] = useState(null);

  // Move state management functions to the top of the component
  const handleCheckboxChange = (todo, e) => {
    const completed = e.target.checked;
    todo.completed = completed;
    setLists({ ...lists });
    updateUITodoStatus(todo, completed);
  };

  const handleItemClick = (selectedListKey, index) => {
    setSelectedListKey(selectedListKey);
    setSelectedListItemIndex(index);
  };

  const updateUITodoStatus = (todo, completed) => {
    if (todo && todo.classList) {
      if (completed) {
        todo.classList.add('line-through', 'text-gray-500');
      } else {
        todo.classList.remove('line-through', 'text-gray-500');
      }
    }
  };

  const addTodo = () => {
    if (todoText.trim() !== '') {
      const currentList = lists[selectedListKey];
      const newTodo = { text: todoText, completed: false };
      currentList.todos.push(newTodo);
      setLists({ ...lists });
      setTodoText('');
      updateUITodoStatus(newTodo, false);
    }
  };

  const deleteTodo = (index) => {
    const currentList = lists[selectedListKey];
    const todoToDelete = currentList.todos[index];
    if (todoToDelete) {
      currentList.todos.splice(index, 1);
      setLists({ ...lists });
    }
  };

  const addList = () => {
    if (newListName.trim() !== '') {
      // Check if the newListName already exists in the lists
      const isDuplicateName = Object.values(lists).some(
        (list) => list.name === newListName
      );

      if (!isDuplicateName) {
        const newListKey = Date.now().toString();
        setLists({
          ...lists,
          [newListKey]: { name: newListName, todos: [] }
        });
        setSelectedListKey(newListKey);
        setNewListName('');
      } else {
        // Handle the case where newListName is a duplicate
        alert('A list with the same name already exists.');
        setNewListName('');

      }
    }
  };

  const deleteList = (listKey) => {
    const updatedLists = { ...lists };
    delete updatedLists[listKey];
    setLists(updatedLists);
    if (selectedListKey === listKey) {
      setSelectedListKey(null);
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
            <Todo
              selectedListKey={selectedListKey}
              lists={lists}
              setTodoText={setTodoText}
              todoText={todoText}
              addTodo={addTodo}
              handleItemClick={handleItemClick}
              handleCheckboxChange={handleCheckboxChange}
              deleteTodo={deleteTodo}
              selectedListItemIndex={selectedListItemIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
