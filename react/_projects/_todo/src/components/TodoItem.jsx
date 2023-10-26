import PropTypes from 'prop-types';

const TodoItem = ({
  todo,
  index,
  selectedListKey,
  handleCheckboxChange,
  deleteTodo,
  handleItemClick,
  selectedListItemIndex
}) => {
  return (
    <li
      className={`flex items-center justify-between p-2 rounded-lg my-1 text-gray-800 transition-colors ${
        todo.completed ? 'line-through text-gray-500' : ''
      } ${
        selectedListKey === selectedListKey && index === selectedListItemIndex
          ? 'bg-blue-200'
          : 'bg-gray-100'
      }`}
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
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  index: PropTypes.number,
  selectedListKey: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  handleItemClick: PropTypes.func.isRequired,
  selectedListItemIndex: PropTypes.number.isRequired
};

export default TodoItem;
