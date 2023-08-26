import './App.css';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/' element={<TodoList />}/>
          <Route path='/todo/:id' element={<TodoItem />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
