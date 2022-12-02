import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(searchTerm);
  };

  const handleChange = (event) => {
    // console.log(event.target.value)
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input value={searchTerm} onChange={handleChange} />
        </label>
        <input type='submit' />
      </form>
    </>
  );
};

export default SearchBar;
