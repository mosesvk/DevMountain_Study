import './App.css';
import ExampleOne from './components/ExampleOne';
import ExampleOne as One from './utility/ExampleOne.jsx'
import ExampleTwo from './components/ExampleTwo';

function App() {
  return (
    <div className="App">
      <ExampleOne />

      {/* <ExampleTwo /> */}
    </div>
  );
}

export default App;
