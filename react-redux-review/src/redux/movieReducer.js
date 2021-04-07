// set our INITIAL STATE with the following properties
const initialState = {
  title: "",
  poster: "",
  rating: null,
  movies: []
}

// set our Action that is equal to it's on string
const SET_MOVIE_INFO = 'SET_MOVIE_INFO';
const UPDATE_MOVIE_LIST = 'UPDATE_MOVIE_LIST'

// ACTION CREATORS
export const setMovieInfo = (title, poster, rating) => {
  return {
    type: SET_MOVIE_INFO, 
    payload: {title, poster, rating}
    // same as {
    //   title: title,
    //   poster: poster,
    //   rating: rating
    // }
  }
}

export const updateMovieList = (newMovie) => {
  return {
    type: UPDATE_MOVIE_LIST,
    payload: newMovie
    //newMovie will already be an object when we add it 
  }
}

// REDUCER FUNCTION 
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE_INFO: 
      return {...state, ...action.payload}
    case UPDATE_MOVIE_LIST:
      return {...state, title: '', poster: '', rating: null, movies: [...state.movies, action.payload]}

    default: 
      return state
  }
}

export default moviesReducer;