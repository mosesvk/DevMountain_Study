import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
    const [books, setBooks] = useState([])

    const createBook = (book) => {

    }

    return (
        <>
            <BookList />
            <BookCreate createBook={createBook} />
        </>
    )
};

export default App;
