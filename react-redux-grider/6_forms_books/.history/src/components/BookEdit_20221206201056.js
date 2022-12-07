import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

const BookEdit = ({ book, onSubmit }) => {
  const { editBookById } = useBooksContext()

  const [bookDesc, setBookDesc] = useState({
    title: book.title,
    author: book.author,
    id: book.id
  });

  const submitHandler = (event) => {
    event.preventDefault();

    onSubmit();
    editBookById(bookDesc);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setBookDesc({
      ...bookDesc,
      [name]: value
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={bookDesc.title}
        name='title'
        placeholder={book.title}
        onChange={changeHandler}
      />
      <input
        value={bookDesc.author}
        name='author'
        placeholder={book.author}
        onChange={changeHandler}
      />
      <input type='submit' />
    </form>
  );
};

export default BookEdit;
