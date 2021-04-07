import React, { Component } from 'react'
import axios from 'axios'

export default class Todos extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/todos')
    this.setState({ todos: data })
  }

  render() {
    return (
      <>
        {this.state.todos.map(t => (
          <div key={t.id}>
            <h2>{t.title}</h2>
          </div>
        ))}
      </>
    )
  }
}
