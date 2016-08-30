import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

//create empty array to store all todos
let todoItems = [];

//seed todoItems array with some raw data
todoItems.push({index: 1, value: "Learn to be more reactive", done: false});
todoItems.push({index: 2, value: "Say hey Sabs", done: false});
todoItems.push({index: 3, value: "Buy flowers for Jen", done: false});

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

  addItem(todoItem) {
    //add each new todo to the start of the array
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue
    });
    //setState will update the prevoius todoItems state
    this.setState({todoItems: todoItems});
  }

  removeItem(itemIndex) {
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

    return(
      <div>
        <TodoForm addItem={this.addItem} todoName={this.state.todoName}/>
        <TodoList items={this.state.todoItems} removeItem={this.removeItem} markDone={this.markDone}/>
      </div>
    );
  }
}
