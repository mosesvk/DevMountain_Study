import { useState, createContext, useCallback } from 'react';
import axios from 'axios'

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback (async () => {
    const {data} = await axios.get('http://localhost:3001/books')

    setBooks(data)
  }, [])

  // we need useCallback because 'fetchBooks' is a dependancy in the "App.js" file
  // 
  

  const createBook = async (book) => {

    const {data} = await axios.post('http://localhost:3001/books', book)

    const updatedBooks = [...books, data];
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {

    await axios.delete(`http://localhost:3001/books/${id}`)
    
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

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks
  }

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export {Provider}
export default BooksContext;

// import BooksContext, {Provider} from '...'