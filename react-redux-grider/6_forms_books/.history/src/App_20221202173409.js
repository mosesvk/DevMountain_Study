import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
    const [books, setBooks] = useState([])

    const createBook = (book) => {
        setBooks([...books, book])
        console.log(books)
    }

    return (
        <>
            <BookList />
            <BookCreate onCreate={createBook} />
        </>
    )
};

export default App;
