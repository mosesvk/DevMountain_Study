import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa'; // Import the trash icon from a popular icon library (e.g., react-icons)

const ListItem = ({
  listKey,
  lists,
  selectedListKey,
  setSelectedListKey,
  deleteList
}) => {
  return (
    <div
      className={`flex items-center justify-between  p-2 rounded-lg my-1 cursor-pointer  transition-transform transform-gpu ${
        selectedListKey === listKey ? 'bg-blue-500 text-white hover:bg-blue-300' : 'bg-gray-100 hover:bg-gray-300'
      }`}
      key={listKey}
      onClick={() => setSelectedListKey(listKey)}
    >
      <div
        className={`text-xl ${
          selectedListKey === listKey ? 'text-white' : 'text-gray-800'
        }`}
      >
        {lists[listKey]?.name || ''}
      </div>

      <button
        onClick={() => deleteList(listKey)}
        className='text-red-500 ml-2 hover:text-red-700'
      >
        <FaTrash className='text-xl' /> {/* Add the trash icon */}
      </button>
    </div>
  );
};

ListItem.propTypes = {
  listKey: PropTypes.string.isRequired,
  lists: PropTypes.object.isRequired,
  selectedListKey: PropTypes.string,
  setSelectedListKey: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired
};

export default ListItem;
