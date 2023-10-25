import PropTypes from 'prop-types';

const Todo = ({selectedListKey, lists, todoText, setTodoText, addTodo, todoList}) => {
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
    todoList: PropTypes.array.isRequired
  };

export default Todo;
