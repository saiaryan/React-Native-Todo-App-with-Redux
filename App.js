import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Provider } from 'react-redux'
import TodoApp from './components/TodoApp'
import store from './redux/store/index'

export default class App extends React.Component {
  render () {
    return(
      <Provider store={store}>
         <TodoApp />
      </Provider>
    )
  }
}


