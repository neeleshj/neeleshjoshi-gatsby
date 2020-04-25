import React, { Component, FunctionComponent } from "react";
import classnames from "classnames";
import "../styles/square.scss";

type SquareProps = {
  colorClass: string;
};

export const Square: FunctionComponent<SquareProps> = ({
  colorClass,
  children,
}) => {
  return <div className={classnames("square staggered", colorClass)}>{children}</div>;
};

export default Square;
