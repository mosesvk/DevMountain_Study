import React from 'react'
import BookShow from './BookShow'

const BookList = ({books}) => {

  const renderedBooks = (books.map((book) => (
    <BookShow />
  )))

  return (
    <div>
        {renderedBooks}
    </div>
  )
}

export default BookList