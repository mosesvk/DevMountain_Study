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
    const {title, author, id} = book_updated
    const updatedBooks = books.filter((book) => {
      if (book.id === id) {
        return {
          ...book,
          title,
          author,
          id
        }
      } else {
        return book

      }

    });

    console.log(updatedBooks)

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
