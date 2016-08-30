import React from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
  render() {
    console.log(this.props.items);
    var listItems = this.props.items.map((item, index) => {
      return (<TodoItem key={index} item={item} index={index}/>);
    });
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}
