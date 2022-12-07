import { createContext } from 'react';

const BooksContext = createContext();

const Provider = ({ children }) => {


  return (
    <BooksContext.Provider value={{}}>
      {children}
    </BooksContext.Provider>
  );
};

export {Provider}
export default BooksContext;

// import BooksContext, {Provider} from '...'