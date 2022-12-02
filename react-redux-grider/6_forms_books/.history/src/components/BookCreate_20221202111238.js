import { useState } from 'react';

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');
//   const [imageUrl, setImageUrl] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value)
  };

  const submitHandler = () => {
    onCreate({ title });
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
        {/* <input type='file' value={imageUrl} accept='image/*' className='input'/> */}
        <input type='submit' value='Submit' className='button' />
      </form>
    </div>
  );
};

export default BookCreate;
