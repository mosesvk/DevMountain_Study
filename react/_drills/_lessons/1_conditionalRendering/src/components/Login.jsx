import {useState} from 'react'

const Login = () => {
    const [isLoggedIn, setLogin] = useState(false)

    // STATE -> login
    // login = false
  
    console.log('isLoggedIn', isLoggedIn)
  
    const loginHandler = () => {
      setLogin(true)
      console.log('isLoggedIn', isLoggedIn)
  
    }
  
    return (
      <div>
        <h1>Welcome to TikTok</h1>
        <button onClick={loginHandler}>Log In</button>
      </div>
    );
}

export default Login