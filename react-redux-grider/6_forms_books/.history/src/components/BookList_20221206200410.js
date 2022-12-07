import { useContext } from 'react';
import BookShow from './BookShow';
import BooksContext from '../context/books';

const BookList = () => {
  const { books } = useContext(BooksContext);

  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} />
  ));

  return <div className='book-list'>{renderedBooks}</div>;
};

export default BookList;
