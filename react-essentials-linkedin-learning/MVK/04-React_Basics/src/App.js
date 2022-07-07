import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondaryEmotion, setSecondaryEmotion] = useState("tired")

  useEffect(() => {
    console.log(`Main Emotion is ${emotion}`);
  }, [emotion]);

  useEffect(() => {
    console.log(`Secondary Emotion is ${secondaryEmotion}`)
  }, [secondaryEmotion])

  // Dependency arrays are critical in efficiency with your app.
  // Notice that we will only get a console log when certain variables are being affected. 

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>
        Sad
      </button>
      <button
        onClick={() => setEmotion("excited")}
      >
        Excited
      </button>

      <h2>Secondary Emotion is {secondaryEmotion}</h2>
      <button
        onClick={() => setSecondaryEmotion('stressed')}
      >Stressed</button>
      <button
        onClick={() => setSecondaryEmotion('calm')}
      >Calm</button>
    </div>
  );
}

export default App;
