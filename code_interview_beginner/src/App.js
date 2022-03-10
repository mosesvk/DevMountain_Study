import { useState } from 'react';
import axios from 'axios'

import './App.css';

const App = () => {
  const [jsonData, setJsonData] = useState('')

  const getData = async() => {
    const apiData = await fetch('/api', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
    // console.log(apiData)
    setJsonData(JSON.stringify(apiData, null, 2))
  }


  return (
    <div className="App">
      <button onClick={getData}>Connect to Backend</button>
      <pre>{jsonData}</pre>
    </div>
  );
}

export default App;
