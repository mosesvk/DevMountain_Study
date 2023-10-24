import PropTypes from 'prop-types';

const ListItem = ({
  listKey,
  lists,
  selectedListKey,
  setSelectedListKey,
  deleteList
}) => {
  return (
    <div
      className={`block bg-gray-100 p-2 rounded-lg my-1 ${
        selectedListKey === listKey ? 'bg-blue-500 text-white' : ''
      }`}
    >
      <a href='#' key={listKey} onClick={() => setSelectedListKey(listKey)}>
        {lists[listKey]?.name || ''}
      </a>
      <button onClick={() => deleteList(listKey)} className='text-red-500 ml-2 hover:bg-slate-700'>
        Delete
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
