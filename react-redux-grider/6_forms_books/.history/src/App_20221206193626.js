import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
// import BooksContext from './context/books';

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const {data} = await axios.get('http://localhost:3001/books')

    setBooks(data)
  }

  const createBook = async (book) => {

    const {data} = await axios.post('http://localhost:3001/books', book)

    const updatedBooks = [...books, data];
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);

    setBooks(updatedBooks);
  };

  const editBookById = async (book_updated) => {
    const { id } = book_updated;

    const {data} = await axios.put(`http://localhost:3001/books/${id}`, book_updated)
 
    const updatedBooks = books.map((book) => {
      if (book.id === id) return {...book, ...data}

      return book;
    }); 

    setBooks(updatedBooks);
  };

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
