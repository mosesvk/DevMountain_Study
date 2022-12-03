import { useState } from 'react';

const BookEdit = ({ book }) => {
  const [values, setValues] = useState({
    title: '',
    author: '',
    id: '',
  })

  const submitHandler = () => {};

  return (
    <form onSubmit={submitHandler}>
      <label>Title</label>
      <input />
      <label>Author</label>
      <input />
    </form>
  );
};

export default BookEdit;
