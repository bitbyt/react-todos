import React from "react";

import Todos from "../components/Todos/Todos";

export default class Home extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <Todos />
        </div>
      </div>
    );
  }
}
