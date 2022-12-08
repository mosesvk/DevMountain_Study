import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

const App = () => {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks])
    // if we put 'fetchBooks' it will go in a infinite loop of api call
      // remember that 'fetchBooks' is constantly called in the BooksContext
  return (
    <div className='app'>
      <BookList />
      <BookCreate />
    </div>
  );
};

export default App;
