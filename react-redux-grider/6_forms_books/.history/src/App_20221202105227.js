import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
    const [books, setBooks] = useState([])



    return (
        <>
            <BookList />
            <BookCreate />
        </>
    )
};

export default App;
