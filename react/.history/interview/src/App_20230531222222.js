import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  updateCount = (e) => {
    const value = e.target.innerText 
    const calc = value === 'reset' ? 0 : value === '-' ? value - 1 : value + 1
    this.setState({ count: calc});
  };

  render() {
    return (
      <div className='App'>
        <h1>Counter</h1>
        <h3>{this.state.count}</h3>
        <div>
          <button onClick={this.updateCount}>-</button>
          <button onClick={this.updateCount}>reset</button>
          <button onClick={this.updateCount}>+</button>
        </div>
      </div>
    );
  }
}
