import React from 'react'
import styles from './styles'
import {connect} from 'react-redux'

const MovieList = props => {
  const movieList = props.movies.map(element => {
    return (
      <div style={styles.movieListItem}>
        <img style={styles.poster} src={element.poster} alt={element.title} />
        <div style={styles.listItemInfo}>
          <p style={styles.listItemText}>{element.title}</p>
          <p style={styles.listItemText}>{element.rating}/10</p>
        </div>
      </div>
    )
  })

  return (
    <div style={styles.container}>
      <p style={styles.containerHeading}>A LIST OF MOVIES</p>
      {movieList}
    </div>
  )
}

const mapStateToProps = (state) => {
  const {movies} = state
  return {movies}
}

export default connect(mapStateToProps)(MovieList)
