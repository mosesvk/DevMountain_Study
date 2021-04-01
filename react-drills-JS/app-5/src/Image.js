import React, { Component } from 'react'; 


export default class Image extends Component {
  render(){
    return (
      <div>
        <img src={this.props.url}/>
        <div>Why cat's tho??</div>
      </div>
    )
  }
}