import { useState } from 'react';
import BookEdit from './BookEdit'

const BookShow = ({ book, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false);

  const deleteHandler = () => {
    onDelete(book.id);
  };

  return (
    <div className='book-show'>
      <h2>{book.title}</h2>
      <p>by: {book.author}</p>
      <button onClick={deleteHandler}>Delete</button>
      {!showEdit && <button>Edit</button>}
      {showEdit && <BookEdit />}
    </div>
  );
};

export default BookShow;
