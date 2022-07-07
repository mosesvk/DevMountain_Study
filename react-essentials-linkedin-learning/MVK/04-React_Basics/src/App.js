import './App.css';
import { useState, useEffect, useReducer } from 'react';

function App() {
  const [emotion, setEmotion] = useState('happy');
  const [secondaryEmotion, setSecondaryEmotion] = useState('tired');
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  // useReducer allows us to manage the function in the useReducer instead of the onChange inside the JSX
  // It will take in two arguments, 1) function that will update the state... 2) initial state

  useEffect(() => {
    console.log(`Main Emotion is ${emotion}`);
  }, [emotion]);

  useEffect(() => {
    console.log(`Secondary Emotion is ${secondaryEmotion}`);
  }, [secondaryEmotion]); // Dependency arrays are critical in efficiency with your app. Notice that we will only get a console log when certain variables are being affected.

  return (
    <div className='App'>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion('sad')}>Sad</button>
      <button onClick={() => setEmotion('excited')}>Excited</button>

      <h2>Secondary Emotion is {secondaryEmotion}</h2>
      <button onClick={() => setSecondaryEmotion('stressed')}>Stressed</button>
      <button onClick={() => setSecondaryEmotion('calm')}>Calm</button>

      <br />
      <br />
      <div>
          <input type='checkbox' value={checked} onChange={setChecked} />
          <label>{checked ? 'checked' : 'not checked'}</label>
      </div>
    </div>
  );
}

export default App;
