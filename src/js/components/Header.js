import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <h1>{this.props.title}</h1>
        </div>
      </div>
    );
  }
}
