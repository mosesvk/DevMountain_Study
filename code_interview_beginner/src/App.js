import axios from 'axios'
import './App.css';

const App = () => {

  const getData = async() => {
    axios.get('http://localhost:5000/api')
      .then(res => {
        console.log(res)
      })
  }


  return (
    <div className="App">
      <button onClick={getData}>Connect to Backend</button>
    </div>
  );
}

export default App;
