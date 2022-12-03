import { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const deleteHandler = () => {
    onDelete(book.id);
  };

  const submitHandler = () => {
    
  }

  return (
    <div className='book-show'>
      <h2>{book.title}</h2>
      <p>by: {book.author}</p>
      <button onClick={deleteHandler}>Delete</button>
      {!showEdit && (
        <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
      )}
      {showEdit && <BookEdit book={book} onSubmit={submitHandler} />}
    </div>
  );
};

export default BookShow;
