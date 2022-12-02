import {useState} from 'react'

const BookCreate = ({onCreate}) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    
    const handleChange = (event) => {
        setTitle(f)
    }

    const submitHandler = () => {
        
        onCreate({title: title, author: author, })
    }

  return (
    <div className='book-create'>
        <form onSubmit={submitHandler}>
            <input type='text' value={title} placeholder='enter title' className='input'/>
            <input type='text' value={author} placeholder='enter author' className='input' />
            <input type='file' value={imageUrl} accept='image/*' className='input'/>
            <input type='submit' value='Submit' />
        </form>
    </div>
  )
}

export default BookCreate