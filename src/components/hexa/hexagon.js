import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import "./hexagon.scss";

export default class Hexagon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const colorClass = `color-${this.props.color}`;
    return <div className={classnames("hexagon", colorClass)}></div>;
  }
}

Hexagon.propTypes = {
  color: PropTypes.string,
  iconName: PropTypes.string,
};
