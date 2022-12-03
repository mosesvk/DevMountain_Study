import React from 'react'
import BookShow from './BookShow'

const BookList = ({books, onDelete, editBookById}) => {

  const renderedBooks = (books.map((book) => (
    <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={editBookById}  />
  )))

  return (
    <div>
        {renderedBooks}
    </div>
  )
}

export default BookList