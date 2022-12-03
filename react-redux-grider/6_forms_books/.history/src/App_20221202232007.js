import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (book) => {
    const updatedBooks = [...books, book];
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);

    setBooks(updatedBooks);
  };

  const editBookById = (updatedBook) => {
    const updatedBooks = books.filter((book) => {
      if (book.id === updatedBook.id) return updatedBook
    });
  };

  return (
    <>
      <BookList
        books={books}
        onDelete={deleteBookById}
        editBookById={editBookById}
      />
      <BookCreate onCreate={createBook} />
    </>
  );
};

export default App;
