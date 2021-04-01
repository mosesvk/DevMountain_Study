import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(){
    super(); 

    this.state = {
      foods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese', 'ribs']
    };
  }

  render(){
    let foodsToDisplay = this.state.foods.map((elem, i) => {
      return <h2 key={i}>{elem}</h2>;
    });
    return (
      <div className="App"> {foodsToDisplay} </div>
    );
  }
}


