import './App.css'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom'

function App() {

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/' children={<TodoList />} />
          <Route path='/todos/:id' children={<TodoItem />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
