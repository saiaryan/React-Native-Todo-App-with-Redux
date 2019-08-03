import { combineReducers } from 'redux'
import todos from './todos'
import filterTodos from './filterTodos'

export default combineReducers({
    todos,
    filterTodos
  })