import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { HashRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
// Import Provider from react-redux and store from our store.js file. Wrap your app component in our Provider and pass it store as a prop called store. This will make our store available to our app.

ReactDOM.render(
  <Router>
  <Provider store={store}>
    <App />
  </Provider>
  </Router>,
  document.getElementById('root')
)
