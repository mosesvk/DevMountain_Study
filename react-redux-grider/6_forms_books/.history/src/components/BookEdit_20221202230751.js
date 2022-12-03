import { useState } from 'react';

const BookEdit = ({ book, onEdit }) => {
  const [values, setValues] = useState({
    title: book.title,
    author: book.author,
    id: book.id
  });

  const submitHandler = (event) => {
    event.preventDefault()

    
  };

  const changeHandler = (event) => {
    const {name, value} = event.target
    setValues({
      ...values,
      [name]: value
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
