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
    // Conditional Operator to return one of two values "done" or "undone" if this.props.item.done returns true
    var todoClass = this.props.item.done ? "done" : "undone";
    return (
        <li className="list-group-item">
          <div className={todoClass}>
            <span class="fa-stack icon" onClick={this.onClickDone}>
              <i class="fa fa-circle-thin fa-stack-2x"></i>
              <i class="fa fa-check fa-stack-1x"></i>
            </span>
            {this.props.item.value}
            <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
          </div>
        </li>
    );
  }
}
