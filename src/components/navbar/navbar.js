import React, { Component } from "react";
import classnames from "classnames";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="w-full h-navbar z-10 sticky top-0 bg-red-500">
        <h3 className="font-merri font-bold text-6xl text-blue-dark">N</h3>
      </nav>
    );
  }
}
