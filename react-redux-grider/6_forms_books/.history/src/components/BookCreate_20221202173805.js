import { useState } from 'react';


const BookCreate = ({ onCreate }) => {
  const [values, setValues] = useState({
    title: '',
    author: '', 
    id: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onCreate(values);
  };

  return (
    <div className='book-create'>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={values.title}
          placeholder='enter title'
          onChange={handleChange}
          className='input'
          name='title'
          label='Title'
        />
        <input
          type='text'
          value={values.author}
          placeholder='enter author'
          onChange={handleChange}
          className='input'
          name='author'
          label='Author'
        />
        {/* <input type='file' value={imageUrl} accept='image/*' className='input'/> */}
        <input type='submit' value='Submit' className='button' />
      </form>
    </div>
  );
};

export default BookCreate;
