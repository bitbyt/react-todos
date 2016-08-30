import React from "react";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }

  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }

  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markDone(index);
  }


  render() {
    // Used Conditional Operator to return one of two values "done" or "undone" if this.props.item.done returns true
    var todoClass = this.props.item.done ? "done" : "undone";
    return (
        <li>
          <div className={todoClass}>
            <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span>
            <h3>{this.props.item.value}</h3>
            <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
          </div>
        </li>
    );
  }
}
