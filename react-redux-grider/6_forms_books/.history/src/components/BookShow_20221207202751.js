import { useState } from 'react';
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/use-books-context';

const BookShow = ({ book }) => {
  const { deleteBookById } = useBooksContext()
  const [showEdit, setShowEdit] = useState(false);

  const deleteHandler = () => {
    deleteBookById(book.id);
  };

  const submitHandler = () => {
    setShowEdit(!showEdit);
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
