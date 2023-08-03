import './App.css';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/'>
            {<TodoList />}
          </Route>
          <Route path='/todos/:id'>{<TodoItem />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
