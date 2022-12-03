import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
    const [books, setBooks] = useState([])

    const createBook = (book) => {
        const updatedBooks = [...books, book]
        setBooks(updatedBooks)
    }

    return (
        <>
            <BookList />
            <BookCreate onCreate={createBook} />
        </>
    )
};

export default App;
