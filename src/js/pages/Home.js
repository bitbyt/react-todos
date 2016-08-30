import React from "react";

import Todos from "../components/Todos/Todos";

export default class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      initItems: []
    };
  }

  render() {
    return (
      <div>
        <Todos initItems={this.state.initItems}/>
      </div>
    );
  }
}
