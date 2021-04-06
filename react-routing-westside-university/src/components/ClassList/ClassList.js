import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(res => {
      this.setState({students: res.data})
    })
    .catch(err => console.log(err))
  }

  render() {
    let mappedStudents = this.state.students.map((e, i) => {
      return(
      <Link to={`/student/${e.id}`} key={i}><h3>{e.first_name} {e.last_name}</h3></Link>
      )})
    return (
      <div className="box">
        <Link to='/'>BACK</Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mappedStudents}
      </div>
    )
  }
}
