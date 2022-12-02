import {useState} from 'react'

const BookCreate = ({onCreate}) => {
    const [title, setTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    
    const handleChange = (event) => {

    }

    const submitHandler = () => {
        
        onCreate({title: title, author: author, })
    }

  return (
    <div className='book-create'>
        <form onSubmit={submitHandler}>
            <input type='text' value={title} placeholder='enter title' className='input'/>
            <input type='file' value={imageUrl} accept='image/*' className='input'/>
            <input type='submit' value='Submit' className='button' />
        </form>
    </div>
  )
}

export default BookCreate