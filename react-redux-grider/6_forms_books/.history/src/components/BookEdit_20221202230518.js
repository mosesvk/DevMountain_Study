import { useState } from 'react';

const BookEdit = ({ book }) => {
  const [values, setValues] = useState({
    title: book.title,
    author: book.author,
    id: book.id
  });

  const submitHandler = () => {};

  const changeHandler = (event) => {
    const {name, value} = event
    setValues({
      ...values,
      [name]: value,
      id
    })
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={values.title}
        name='title'
        placeholder={book.title}
        onChange={changeHandler}
      />
      <input
        value={values.author}
        name='title'
        placeholder={book.author}
        onChange={changeHandler}
      />
      <input type='submit' />
    </form>
  );
};

export default BookEdit;
