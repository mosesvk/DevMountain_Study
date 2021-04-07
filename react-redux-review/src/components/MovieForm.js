import React, { Component } from 'react'
import styles from './styles'
import {connect} from 'react-redux'
import {setMovieInfo} from '../redux/movieReducer'

class MovieForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      poster: '',
      rating: null,
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    // destructure state and invoke propsthat we specified in the REDUCER "movieReducer" on line 13 for the Action Creator
    const {title, poster, rating} = this.state
    this.props.setMovieInfo(title, poster, rating)
    this.props.history.push('/confirm')
  }

  render() {
    return (
      <div style={styles.container}>
        <p style={styles.containerHeading}>INPUT DETAILS</p>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <input
            style={styles.formInput}
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
          />
          <input
            style={styles.formInput}
            name="poster"
            placeholder="Poster URL"
            onChange={this.handleChange}
          />
          <input
            style={styles.formInput}
            name="rating"
            placeholder="Rating"
            onChange={this.handleChange}
            type="number"
            max={10}
            min={0}
          />
          <button type="submit" style={styles.formButton}>
            NEXT
          </button>
        </form>
      </div>
    )
  }
}



export default connect(null, {setMovieInfo})(MovieForm)
