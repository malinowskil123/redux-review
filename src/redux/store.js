import { createStore } from 'redux'
import moviesReducer from './moviesReducer'

export default createStore(moviesReducer)
