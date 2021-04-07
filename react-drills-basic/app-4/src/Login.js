import React, { Component } from 'react'; 

export default class Login extends Component {
  constructor(){
    super(); 

    this.state = {
      username: '', 
      password: ''
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleUsernameChange(user){
    this.setState({ username: user })
  }

  handlePasswordChange(key){
    this.setState({ password: key })
  }

  handleLogin(){
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render(){
    return (
      <div>
        <input onChange={e => this.handlePasswordChange(e.target.value)} type="text"/>
        <input onChange={e => this.handlePasswordChange(e.target.value)} type="text"/>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    ) 
  }
}