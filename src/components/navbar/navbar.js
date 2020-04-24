import React, { Component } from "react";
import classnames from "classnames";

export default class Navbar extends Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      showHeaderBackground: true,
    };
  }

  /**
   * Adds an event listener when the component is mount
   */
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  /**
   *  Remove the event listener when the component is unmount.
   */
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  /**
   * Handle the scroll event
   * If the scroll value passes a given threshhold update styles via boolean
   */
  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const threshhold = 250;
    const showHeaderBackground = currentScrollPos > threshhold;
    // this.setState({
    //   showHeaderBackground,
    // });
  };

  render() {
    return (
      <nav
        className={classnames("w-full px-3  z-10 sticky top-0", {
          "py-3": this.state.showHeaderBackground,
        })}
      >
        <div
          className={classnames(
            "py-1 transition-all duration-1000 ease-in-out",
            {
              "bg-white": !this.state.showHeaderBackground,
              "bg-blue-primary": this.state.showHeaderBackground,
              "px-2": this.state.showHeaderBackground,
              "text-blue-dark": !this.state.showHeaderBackground,
              "text-grey-light": this.state.showHeaderBackground,
              // rounded: this.state.showHeaderBackground,
            }
          )}
        >
          <h3 className="font-merri font-bold text-5xl">N</h3>
        </div>
      </nav>
    );
  }
}
