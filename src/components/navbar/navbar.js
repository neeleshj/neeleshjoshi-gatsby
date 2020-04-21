import React, { Component } from "react";
import classnames from "classnames";
import "./navbar.scss";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className={classnames("navbar")}>
        <h1 className="font-merri">TEAT</h1>
        <h1 className="font-mont">TEAT</h1>

        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
      </nav>
    );
  }
}
