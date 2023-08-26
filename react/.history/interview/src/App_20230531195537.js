import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super() 
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h3>{this.state.count}</h3>
        <div>
          <button>-</button>
          <button>reset</button>
          <button>+</button>
        </div>
      </div>
    )
  }
}
