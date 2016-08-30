import React from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
  render() {
    // An arrow function does not create its own this context; rather, it captures the this value of the enclosing context
    var listItems = this.props.items.map((item, index) => {
      //give the rendered component a key and index. kay is required by React when rendering a list of components
      return (<TodoItem key={index} item={item} index={index} removeItem={this.props.removeItem} markDone={this.props.markDone}/>);
    });
    return (
        <ul className="list-group">{listItems}</ul>
    );
  }
}
