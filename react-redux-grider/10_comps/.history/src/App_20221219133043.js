import Route from './components/Route';
import Sidebar from './components/Sidebar';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';

function App() {
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div>
        <Route path='accordion'>
          <AccordionPage />
        </Route>
        <Route path='/'>
          <DropdownPage />
        </Route>
        <Route path='dropdown'>
          <DropdownPage />
        </Route>
      </div>
    </>
  );
}

export default App;
