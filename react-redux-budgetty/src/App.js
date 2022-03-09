import React, { Component } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
import Login from './components/Login/Login';
import Budget from './components/Budget/Budget';
import './App.css';

class App extends Component {

  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<Login />} exact />
          <Route path='/my-budget' element={<Budget />} />
        </Routes>
      </HashRouter>
    );
  }
}

export default App;
