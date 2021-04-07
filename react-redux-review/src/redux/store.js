import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension'
import moviesReducer from './movieReducer'

let store = createStore(moviesReducer, devToolsEnhancer());
export default store;

