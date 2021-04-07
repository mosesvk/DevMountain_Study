import React, { Component } from 'react';
import Todo from './Todo';

export default class List extends Component {
  render(){
    let list = this.props.tasks.map((elem, i) => {
      return <Todo key={i} task={elem} />;
    })

    return <div>{list}</div>
  }
}