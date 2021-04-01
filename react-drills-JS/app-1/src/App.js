import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      message: ''
    };
  }

  textChange(val){
    this.setState({ message: val })
  }

  render(){
    return (
      <div className="App">
        <input 
          onChange={ (e) => 
            this.textChange(e.target.value) } 
          type="text"
          placeholder="input text..."/>
        <p>{this.state.message}</p>
      </div>
    )
  }
}
