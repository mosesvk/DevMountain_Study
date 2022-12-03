import React from 'react'

const BookShow = ({book}) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>by: {book.author}</p>
    </div>
  )
}

export default BookShow