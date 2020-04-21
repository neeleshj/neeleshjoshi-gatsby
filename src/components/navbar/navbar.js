import React, { Component } from "react";
import classnames from "classnames";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  // As we scroll we need to
  // BG white -> blue
  // Add rounded corners
  // add padding on the x - 16px


  render() {
    return (
      <nav className="w-full px-3 z-10 sticky top-0 bg-red-500">
        <div className="bg-black py-2">
          <h3 className="font-merri font-bold text-5xl text-blue-dark">N</h3>
        </div>
      </nav>
    );
  }
}
