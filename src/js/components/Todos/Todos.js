import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

//create empty array to store all todos
let todoItems = [];

//seed todoItems array with some raw data
todoItems.push({index: 1, value: "learn react", done: false});
todoItems.push({index: 2, value: "Go shopping", done: true});
todoItems.push({index: 3, value: "buy flowers for Jen", done: true});

export default class Todos extends React.Component {
  constructor(props){
    super(props);

    this.addItem = this.addItem.bind(this);
    this.state = {
      todoName: "I wanna do..",
      todoItems: todoItems
    };
  }

  changeTodoName(todoName) {
    this.setState({todoName});
  }

  addItem(todoItem) {
    //add each new todo to the start of the array
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue
    });
    this.setState({todoItems: todoItems});
    console.log(this.state.todoItems);
  }

  removeItem (itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({todoItems: todoItems});
  }

  markDone(itemIndex) {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({todoItems: todoItems});
  }

  render() {
    console.log(this.state.todoItems);

    return(
      <div>
        <TodoList items={this.state.todoItems}/>
        <TodoForm addItem={this.addItem} changeTodoName={this.changeTodoName.bind(this)} todoName={this.state.todoName}/>
      </div>
    );
  }
}
