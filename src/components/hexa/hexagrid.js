import React, { Component } from "react";
import Hexagon from "./hexagon";
import "./hexagon.scss";

export default class HexagonGrid extends Component {
  render() {
    return (
      <div className="hexagon-container">
        <Hexagon color="vuejs" />
        <Hexagon color="angular" />
        <Hexagon color="reactjs" />
        <Hexagon color="ionic" />
        <Hexagon color="nodejs" />
        <Hexagon color="firebase" />
        <Hexagon color="graphql" />
        <Hexagon color="nuxtjs" />
        <Hexagon color="gatsby" />
        <Hexagon color="git" />
        <Hexagon color="css" />
        <Hexagon color="html" />
        <Hexagon color="javascript" />
        <Hexagon color="typescript" />
        <Hexagon color="sass" />
      </div>
    );
  }
}
