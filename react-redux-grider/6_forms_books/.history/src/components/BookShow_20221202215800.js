import React from 'react'

const BookShow = ({book, onDelete}) => {

  const deleteById = (id) => {

  }

  return (
    <div className='book-show'>
      <h2>{book.title}</h2>
      <p>by: {book.author}</p>
      <button onClick={deleteById(book.id)}>Delete</button>
    </div>
  )
}

export default BookShow