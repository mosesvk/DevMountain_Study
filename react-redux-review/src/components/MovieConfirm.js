import React from 'react'
import styles from './styles'
import {connect} from 'react-redux'
import {updateMovieList} from '../redux/movieReducer'
// both line 3 and 4 will be done at the bottom

const MovieConfirm = props => {

// the MovieConfirm component currently has a placerholder strings to Title, Rating and URL. Change those strings to references to our vaslues on props to make them display correctly
  const {title, poster, rating} = props
  const confirmMovie = () => {
    props.updateMovieList({title, poster, rating})
    props.history.push('/list')
  }

  // Destructure title, poster, rating from  props so you can input them on lines 18-19 in the return. This will now show the title, poster, and rating that we inputted and stored it to the redux.


  return (
    <div style={styles.container}>
      <p style={styles.containerHeading}>CONFIRM YOUR DETAILS</p>
      <p style={styles.confirmText}>{`${title} - ${rating}`}</p>
      <img src={`${poster}`} alt="Movie Poster" />
      <div>
        <button
          onClick={() => props.history.push('/')}
          style={styles.formButton}
        >
          BACK
        </button>
        <button onClick={confirmMovie} style={styles.formButton}>
          CONFIRM
        </button>
      </div>
    </div>
  )
}

//Create a function that destructures title, poster, andrating from our redux state and return it as an object containing those three values. 

const mapStateToProps = (state) => {
  const {title, poster, rating} = state
  return {
    title,
    poster, 
    rating
  }
}

export default connect(mapStateToProps, {updateMovieList})(MovieConfirm)
