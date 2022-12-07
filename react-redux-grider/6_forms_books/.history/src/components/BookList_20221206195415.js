import BookShow from './BookShow';
import { books } from '../context/books';

const BookList = () => {

  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} />
  ));

  return <div className='book-list'>{renderedBooks}</div>;
};

export default BookList;
