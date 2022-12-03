import { useState } from 'react';

const BookEdit = ({ book }) => {
  const [values, setValues] = useState({
    title: '',
    author: '',
    id: '',
  })

  const submitHandler = () => {};

  const changeHandler = () => {

  }

  return (
    <form onSubmit={submitHandler}>
      <input value={values.title} name='title' placeholder={book.title} onChange={changeHandler}/>
      <input value={values.author} name='title' placeholder={book.author} onChange={changeHandler} />
      <input type='submit' />
    </form>
  );
};

export default BookEdit;
                 