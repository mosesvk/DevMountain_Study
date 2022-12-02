import {useState} from 'react'

const BookCreate = ({onCreate}) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    
    const handleChange = (event) => {

    }

    const submitHandler = () => {
        
        onCreate({title: title, author: author, })
    }

  return (
    <div onSubmit={submitHandler}>
        <form>
            <input type='text' value={title} placeholder='enter title'/>
            <input type='text' value={author} placeholder='enter author' />
            <input type='file' value={imageUrl} accept='image/*'/>
            <input type='submit' value='Submit' />
        </form>
    </div>
  )
}

export default BookCreate