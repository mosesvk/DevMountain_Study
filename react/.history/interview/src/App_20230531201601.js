import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  updateCount = () => {
    console.log(typeof this.state.count)
    this.setState({ count: this.state.age + 1 });
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
