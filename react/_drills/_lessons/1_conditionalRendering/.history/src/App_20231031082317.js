import { useState } from 'react';

function App() {
  const [isLoggedIn, setLogin] = useState(false)

  // STATE -> login
  // login = false

  console.log('isLoggedIn', isLoggedIn)

  const loginHandler = () => {
    setLogin(true)
  }

  return (
    <div>
      <h1>Welcome to TikTok</h1>
      <button onClick={loginHandler}>Log In</button>
    </div>
  );
}

export default App;
