import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super() 
    this.state = {
      count: 0
    }
  }

  updateCount = (e) => {
    console.log(e.target.value)
  }

  render() {
    return (
      <div className='App'>
        <h1>Counter</h1>
        <h3>{this.state.count}</h3>
        <div>
          <button onClick={(e) => this.updateCount(e)}>-</button>
          <button>reset</button>
          <button>+</button>
        </div>
      </div>
    )
  }
}
