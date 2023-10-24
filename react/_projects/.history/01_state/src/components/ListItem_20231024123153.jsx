
import PropTypes from 'prop-types';

const ListItem = ({ listKey, lists, selectedListKey, setSelectedListKey }) => {
  return (
    <a
      href='#'
      key={listKey}
      className={`block bg-gray-100 p-2 rounded-lg my-1 ${
        selectedListKey === listKey ? 'bg-blue-500 text-white' : ''
      }`}
      onClick={() => setSelectedListKey(listKey)}
    >
      {lists[listKey]?.name || ''}
    </a>
  );
};

ListItem.propTypes = {
  listKey: PropTypes.string.isRequired,
  lists: PropTypes.object.isRequired,
  selectedListKey: PropTypes.string,
  setSelectedListKey: PropTypes.func.isRequired,
};

export default ListItem;
