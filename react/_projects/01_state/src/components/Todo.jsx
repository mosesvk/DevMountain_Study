import PropTypes from 'prop-types';

const Todo = ({
  selectedListKey,
  lists,
  todoText,
  setTodoText,
  addTodo,
  selectedListItemIndex,
  handleItemClick,
  handleCheckboxChange,
  deleteTodo
}) => {
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

  return (
    <>
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
    </>
  );
};

Todo.propTypes = {
  selectedListKey: PropTypes.string,
  lists: PropTypes.object.isRequired,
  todoText: PropTypes.string.isRequired,
  setTodoText: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  todoList: PropTypes.array,
  selectedListItemIndex: PropTypes.number, // Add this for `selectedListItemIndex`
  handleItemClick: PropTypes.func, // Add this for `handleItemClick`
  handleCheckboxChange: PropTypes.func, // Add this for `handleCheckboxChange`
  deleteTodo: PropTypes.func // Add this for `deleteTodo`
};

export default Todo;
