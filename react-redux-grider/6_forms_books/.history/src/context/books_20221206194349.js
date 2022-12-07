import { useState, createContext } from 'react';
import axios from 'axios'

const BooksContext = createContext();

const Provider = ({ children }) => {
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

  return (
    <BooksContext.Provider value={{}}>
      {children}
    </BooksContext.Provider>
  );
};

export {Provider}
export default BooksContext;

// import BooksContext, {Provider} from '...'