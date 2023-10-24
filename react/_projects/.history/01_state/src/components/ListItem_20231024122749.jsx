const ListItem = (listKey, lists, selectedListKey, setSelectedListKey) => {
    console.log(lists)
  return (
    <a
      href='#'
      key={listKey}
      className={`block bg-gray-100 p-2 rounded-lg my-1 ${
        selectedListKey === listKey ? 'bg-blue-500 text-white' : ''
      }`}
      onClick={() => setSelectedListKey(listKey)}
    >
      {lists[listKey]?.name || ''} {/* Add the conditional check here */}
    </a>
  );
};

export default ListItem;
