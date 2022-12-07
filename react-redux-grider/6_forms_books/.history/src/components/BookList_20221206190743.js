import { useContext } from 'react';
import BookShow from './BookShow';
import BooksContext from '../context/books';

const BookList = ({ books, onDelete, onEdit }) => {
  const { count, incrementCount } = useContext(BooksContext);

  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
  ));

  return (
    <div className='book-list'>
      {count}
      <button onClick={incrementCount}>count</button>
      {renderedBooks}
    </div>
  );
};

export default BookList;
