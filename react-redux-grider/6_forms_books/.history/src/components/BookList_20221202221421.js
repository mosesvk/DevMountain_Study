import React from 'react'
import BookShow from './BookShow'

const BookList = ({books, onDelete}) => {

  const renderedBooks = (books.map((book) => (
    <BookShow key={book.id} book={book} onDelete={onDelete} />
  )))

  return (
    <div>
        {renderedBooks}
    </div>
  )
}

export default BookList