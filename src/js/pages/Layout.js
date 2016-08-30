import React from "react";
import { Link } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Layout extends React.Component {

  render() {
    const title = "Todo or not todo";

    return(
      <div>
        <Header title={title} />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}
