import { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const deleteHandler = () => {
    onDelete(book.id);
  };

  const submitHandler = (book) => {
    setShowEdit(!showEdit)
    onEdit(book)
  }

  return (
    <div className='book-show'>
      <h2>{book.title}</h2>
      <p>by: {book.author}</p>
      <div className='actions'>
        <button onClick={deleteHandler}>Delete</button>
        {!showEdit && (
          <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
        )}
        {showEdit && <BookEdit book={book} onSubmit={submitHandler} />}
      </div>
    </div>
  );
};

export default BookShow;
