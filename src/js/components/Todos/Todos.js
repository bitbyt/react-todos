import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import * as firebase from "firebase";
var config = require('./config').config;

// Initialize Firebase
firebase.initializeApp(config);

//create empty array to store all todos
let todoItems = [];

export default class Todos extends React.Component {
  constructor(props){
    super(props);

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markDone = this.markDone.bind(this);
    this.state = {
      todoName: "I wanna do..",
      todoItems: todoItems
    };
  }

  componentWillMount() {
    //seed todoItems array with some raw data
    todoItems.push({index: 1, value: "Learn to be more reactive", done: false});
    todoItems.push({index: 2, value: "Say hey Sabs", done: false});
    todoItems.push({index: 3, value: "Buy flowers for Jen", done: false});
    //setState will update the prevoius todoItems state
    this.firebaseRef = firebase.database().ref().child('todo');

    this.firebaseRef.on('child_added', snap => {
      //add each new todo to the start of the array
      todoItems.unshift({
        index: snap.key,
        value: snap.val()
      });
      this.setState({todoItems: todoItems});
      console.log(todoItems);
    });
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

  addItem(todoItem) {
    //add each new todo to the start of the array
    this.firebaseRef.push(todoItem.newItemValue);
    //setState will update the prevoius todoItems state
    this.setState({todoItems: todoItems});
  }

  removeItem(itemIndex) {
    var item = this.state.todoItems[itemIndex];
    console.log(item.index);
    firebase.database().ref('todo/' + item.index).remove();
    //splice to remove the todo according to the index passed from the todoItem props
    todoItems.splice(itemIndex, 1);

    this.setState({todoItems: todoItems});
  }

  markDone(itemIndex) {
    var todo = todoItems[itemIndex];
    //splice to remove the todo's original state
    todoItems.splice(itemIndex, 1);
    //override todo.done's truthy value so that it will always be marked as not done
    todo.done = !todo.done;
    //if todo is marked as done, the todo will be pushed to the bottom of the array and if not done, be unshifted to the top
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    //update the state again
    this.setState({todoItems: todoItems});
  }

  render() {
    console.log(this.firebaseRef);
    return(
      <div>
        <TodoForm addItem={this.addItem} todoName={this.state.todoName}/>
        <TodoList items={this.state.todoItems} removeItem={this.removeItem} markDone={this.markDone}/>
      </div>
    );
  }
}
