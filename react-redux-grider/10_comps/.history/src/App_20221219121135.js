import Link from './components/Link';
import Route from './components/Route'

function App() {
  return (
    <>
      <div>
        <Link to='accordion'>Go to accordion</Link>
        <Link to='dropdown'>Go to dropdown</Link>
      </div>
      <div>
        <Route></Route>
      </div>
    </>
  );
}

export default App;
