import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // handleChange(e) {
  //   const todoName = e.target.value;
  //   this.props.changeTodoName(todoName);
  // }

  onSubmit(e) {
    e.preventDefault();
    var newItemValue = this.refs.itemName.value;

    if(newItemValue) {
      this.props.addItem({newItemValue});
      this.refs.form.reset();
    }
  }

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input ref="itemName" />
          <input type='submit' value='Add'/>
        </form>
      </div>
    );
  }
}
