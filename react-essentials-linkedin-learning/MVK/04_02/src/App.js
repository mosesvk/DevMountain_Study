import './App.css';
import { useState } from 'react'

function App() {
  const [emotion, setEmotion] = useState('Happy')

  return (
    <div className="App">
      <h1>Current Emotion</h1>
      <button onClick={() => setEmotion('Sad')} >{emotion}</button>
    </div>
  );
}

export default App;
