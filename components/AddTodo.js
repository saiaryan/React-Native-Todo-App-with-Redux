import React, { Component } from 'react';
import Swipeout from 'react-native-swipeout'
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Button } from 'native-base';
import { connect } from 'react-redux'
// const todo = useSelector(state => state.todos)

const mapStateToProps = state  => ({
    todos: state.todos
})
var swipeoutBtns = [
    {
      Button: 'Delete'
    }
  ]
class AddTodo extends React.Component {
    state = {
      text: '',
      visible: false,
      key: 0
    }
    handleAddTodo = () => {
        this.props.dispatch({
            type:'ADD_TODO', text: this.state.text
        })
        this.setState({ text: '' })
    }
    handleDelete = (i) => {
        this.setState({ visible: true, key: i})
    }
    handeDeleteTodo = () => {
        this.props.dispatch({
            type:'DELETE_TODO', key: this.state.key
        })
        this.setState({ visible: false })
    }
  render() {
    return(
      <View>
        <View style={{marginTop: 5, borderLeftWidth: 2, borderRightWidth: 2}}>  
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: '#ffffff',paddingLeft: 15,paddingRight: 15}}
          placeholder='Create New Todo'
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        </View>
        <View style={{marginTop: 5}}>
         <Button block success onPress={this.handleAddTodo}>
            <Text>ADD TODO</Text>
          </Button>
          </View>
          {this.props.todos.length > 0
          ? this.props.todos.map((data, i) => {
            return(
                <TouchableOpacity  key={i} onPress={() => this.handleDelete(i)} backgroundColor="transparent" >
                <Text style={{fontSize: 30}}>
                  {data}
                </Text>
                </TouchableOpacity>
            )
            })
          : null }
        <View>
        <Dialog
          visible={this.state.visible}
          onTouchOutside={() => { this.setState({ visible: false }) }}
        >
        <DialogContent>
          <Text style={{fontSize: 18, fontFamily: 'sans-serif'}}>Are You Sure Want To Delete Todo</Text>
            <View style={{justifyContent: 'center', alignItems:'center', marginTop: 15}}>
            <Button onPress={this.handeDeleteTodo} style={{justifyContent: 'center', alignItems:'center', width: 70, height: 30}} danger>
                <Text>Delete</Text>
            </Button>
            </View>
        </DialogContent>
        </Dialog>
      </View>
    </View>
    )
  }
}

export default connect(mapStateToProps)(AddTodo) 