import axios from 'axios';
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = async (book) => {

    const response = await axios.post('http://localhost:3001/books', book)

    console.log(book)
    // const updatedBooks = [...books, book];
    // setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);

    setBooks(updatedBooks);
  };

  const editBookById = (book_updated) => {
    const { id } = book_updated;
    const updatedBooks = books.map((book) => {
      if (book.id === id) return book_updated

      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className='app'>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
