import React, { Component } from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';
import logo from './logo.svg';
import './App.css';

export default class TopicBrowser extends Component {
  render(){
    return (
      <div>
        <h2>React Project</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <EvenAndOdd /> 
        <FilterObject />
        <FilterString />
        <Palindrome />  
        <Sum />
      </div>
    )
  }
}
