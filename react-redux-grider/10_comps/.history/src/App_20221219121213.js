import Link from './components/Link';
import Route from './components/Route'
import AccordionPage from './pages/AccordionPage'

function App() {
  return (
    <>
      <div>
        <Link to='accordion'>Go to accordion</Link>
        <Link to='dropdown'>Go to dropdown</Link>
      </div>
      <div>
        <Route path='accordion'><AccordionPage /></Route>
      </div>
    </>
  );
}

export default App;
