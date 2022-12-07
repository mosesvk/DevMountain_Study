import { useState, useContext } from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/books';

const BookShow = ({ book }) => {
  const { deleteBookById, editBookById } = useContext(BooksContext);

  const [showEdit, setShowEdit] = useState(false);

  const deleteHandler = () => {
    onDelete(book.id);
  };

  const submitHandler = (book) => {
    setShowEdit(!showEdit);
    onEdit(book);
  };

  return (
    <div className='book-show'>
      <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <h2>{book.title}</h2>
      <p>by: {book.author}</p>
      <div className='actions'>
        <button className='delete' onClick={deleteHandler}>
          Delete
        </button>
        {!showEdit && (
          <button className='edit' onClick={() => setShowEdit(!showEdit)}>
            Edit
          </button>
        )}
        {showEdit && <BookEdit book={book} onSubmit={submitHandler} />}
      </div>
    </div>
  );
};

export default BookShow;
