
import React, {useState} from 'react';

const SearchBar = ({clickHandler}) => {
    const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button onClick={clickHandler(searchTerm)} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
