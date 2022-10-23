import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { WorkoutsContextProvider as Provider } from './context/workoutsContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
