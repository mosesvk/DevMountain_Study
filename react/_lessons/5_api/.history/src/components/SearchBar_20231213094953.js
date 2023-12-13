import React, { useState } from 'react';

const SearchBar = ({ clickHandler }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    clickHandler(searchTerm);
  };

  return (
    <form className='flex items-center justify-center' onSubmit={handleSearchSubmit}>
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Search...'
        className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      <button
        type='submit' // Add type attribute to make it a submit button
        className='ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
