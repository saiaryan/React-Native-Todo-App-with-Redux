import React, { Component } from 'react';
import {Text, View} from 'react-native'
import AddTodo from './AddTodo'

export default class TodoApp extends React.Component {
  render() {
    return(
      <View>
        <AddTodo />
      </View>
    )
  }
}