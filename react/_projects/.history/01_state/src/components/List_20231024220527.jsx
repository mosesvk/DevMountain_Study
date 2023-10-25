import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = ({
  newListName,
  setNewListName,
  addList,
  lists,
  selectedListKey,
  setSelectedListKey,
  deleteList
}) => {
  return (
    <div className='flex flex-col'>
      <input
        type='text'
        id='listInput'
        className='rounded-lg border p-2'
        placeholder='Enter a new list name'
        value={newListName} // Bind the input value to the newListName state
        onChange={(e) => setNewListName(e.target.value)} // Update newListName on input change
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addList();
          }
        }}
      />
      <button
        className='bg-blue-500 text-white p-2 mt-2 rounded-lg'
        onClick={addList}
      >
        Add List
      </button>
      <div className='mt-3' id='listsContainer'>
        {Object.keys(lists).map((listKey, index) => (
          <ListItem
            key={index}
            listKey={listKey}
            lists={lists}
            setSelectedListKey={setSelectedListKey}
            selectedListKey={selectedListKey}
            deleteList={deleteList}
          />
        ))}
      </div>
    </div>
  );
};

List.propTypes = {
    newListName: PropTypes.string.isRequired,
    setNewListName: PropTypes.func.isRequired,
    addList: PropTypes.func.isRequired,
    lists: PropTypes.object.isRequired,
    selectedListKey: PropTypes.string,
    setSelectedListKey: PropTypes.func.isRequired,
    deleteList: PropTypes.func.isRequired
  };

export default List;
