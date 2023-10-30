import {useState} from 'react';

const login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        // Render this content if the user is logged in
        <div>
          <h2>Welcome, User!</h2>
          <p>Here is your private profile information.</p>
          <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
        </div>
      ) : (
        // Render this content if the user is not logged in
        <div>
          <h2>Please log in to view your profile.</h2>
          <button onClick={() => setIsLoggedIn(true)}>Log In</button>
        </div>
      )}
    </div>
  );
};

export default login;
