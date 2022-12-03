import {useState} from 'react'

const BookShow = ({ book, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false)

  const deleteHandler = () => {
    onDelete(book.id);
  };

  const editHandler = () => {
    onEdit(book.id)
  }

  return (
    <div className='book-show'>
      <h2>{book.title}</h2>
      <p>by: {book.author}</p>
      <button onClick={deleteHandler}>Delete</button>
      {!showEdit && <button onClick={() => setShowEdit(!showEdit)}>Edit</button>}
      {showEdit && (

      )}
    </div>
  );
};

export default BookShow;
