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

  const editBookById = (book_updated) => {
    const updatedBooks = books.filter((book) => {
      if (book.id === book_updated.id) {
        return {
          ...book,
          title: book_updated.title,
          author: book_updated.author,
          id: book_updated.id
        }
      }

      return book
    });

    console.log(books)

    return updatedBooks
  };

  return (
    <>
      <BookList
        books={books}
        onDelete={deleteBookById}
        onEdit={editBookById}
      />
      <BookCreate onCreate={createBook} />
    </>
  );
};

export default App;
