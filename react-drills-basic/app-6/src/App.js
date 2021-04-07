import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

export default class App extends Component {
  constructor(){
    super(); 

    this.state = {
      list: [], 
      input: ''
    };

    this.handleAddTask = this.handleAddTask.bind( this )
  }

  handleInputChange(val){
    this.setState({ input: val})
  }

  handleAddTask(){
    this.setState({
      list: [...this.state.list, this.state.input], 
      input: ''
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.setState({
        list: [...this.state.list, this.state.input], 
        input: ''
      })
    }
  }
  
  render(){
    let list = this.state.list.map((elem, i) => {
      return <Todo key={i} task={elem} />;
    });

    return(
      <div className="App">
        <h1>To-do List:</h1>

        <div>
          <input
            value={this.state.input}
            placeholder="Enter new task"
            onChange={ e => this.handleInputChange(e.target.value) } 
            onKeyPress={this.handleKeyPress} />
          <button onClick={this.handleAddTask} onKe>Add</button>
        </div>

      <br/>

        {list}
      </div>
    )
  }
}
