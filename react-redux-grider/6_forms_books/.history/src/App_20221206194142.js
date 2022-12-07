import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
// import BooksContext from './context/books';

const App = () => {

  useEffect(() => {
    fetchBooks()
  }, [setBooks])

  return (
    <div className='app'>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
