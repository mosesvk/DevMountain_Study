import { useState } from 'react';

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('')
  const [values, setValues] = useState({
    title: '',
    author: ''
  })
  //   const [imageUrl, setImageUrl] = useState('');

  const handleChange = (event) => {
    console.log(event.target)
  };

  const submitHandler = (e) => {
    e.preventDefault() 
    onCreate({ title: title });
  };

  return (
    <div className='book-create'>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={title}
          placeholder='enter title'
          onChange={handleChange}
          className='input'
        />
        <input
          type='text'
          value={author}
          placeholder='enter author'
          onChange={handleChange}
          className='input'
        />
        {/* <input type='file' value={imageUrl} accept='image/*' className='input'/> */}
        <input type='submit' value='Submit' className='button' />
      </form>
    </div>
  );
};

export default BookCreate;
