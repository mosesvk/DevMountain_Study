import React, { Component } from 'react';
import "./../Budget/Budget.css"

class Nav extends Component {
  render() {
    let { firstName, lastName } = this.props;
    if (!firstName) firstName = 'MISSING'
    if (!lastName) lastName = 'MISSING'
    console.log(process.env)
    return (
      <div className="top">
        <div className="title">budgetty</div>
        <div className="user-info">
          {firstName} {lastName}
          <img src="./peterquill.jpg" alt="" className='photo' />
          <a href={`${process.env.SERVER_PORT}/auth/logout`}><button className='btn btn-md btn-outline-dark mr-4'>logout</button></a>
        </div>
      </div>
    )
  }
}

export default Nav