import { useState } from 'react';

function App() {
  const [login, setLogin] = useState(false)

  // STATE -> login
  // login = false

  console.log(login)

  return (
    <div>
      <h1>Welcome to TikTok</h1>
      <button>Log In</button>
    </div>
  );
}

export default App;
