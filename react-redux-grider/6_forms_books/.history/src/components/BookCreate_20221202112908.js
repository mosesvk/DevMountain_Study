import { useState } from 'react';

// const initialValues = {
//     title: '',
//     author: ''.
// }

const BookCreate = ({ onCreate }) => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
  const [values, setValues] = useState({
    title: '',
    author: ''
  });
  //   const [imageUrl, setImageUrl] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value
    });

    console.log(values)
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
        />
        <input
          type='text'
          value={values.author}
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
