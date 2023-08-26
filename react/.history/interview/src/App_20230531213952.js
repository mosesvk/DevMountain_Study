import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  updateCount = () => {
    console.log(this.state.count + 1)
    this.setState({ count: this.state.age });
  };

  render() {
    return (
      <div className='App'>
        <h1>Counter</h1>
        <h3>{this.state.count}</h3>
        <div>
          <button onClick={this.updateCount}>-</button>
          <button>reset</button>
          <button>+</button>
        </div>
      </div>
    );
  }
}
