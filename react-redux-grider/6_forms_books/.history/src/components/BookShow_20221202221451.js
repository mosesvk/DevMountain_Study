import {useState} from 'react'

const BookShow = ({ book, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false)

  const deleteHandler = () => {
    onDelete(book.id);
  };

  return (
    <div className='book-show'>
      <h2>{book.title}</h2>
      <p>by: {book.author}</p>
      <button onClick={deleteHandler}>Delete</button>
      <button onClick={editHandler}>Edit</button>
    </div>
  );
};

export default BookShow;
