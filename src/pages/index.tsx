import React, { Component, ReactNode } from "react";
import "../styles/global.css";

import SEO from "../components/seo";
import TechSquares from "../components/techSquares";

export default class IndexPage extends Component {
  componentDidMount(): void {
    // AnimeJS stuff here
  }

  render(): ReactNode {
    return (
      <div className="w-full h-screen relative px-3 flex flex-col items-center justify-center">
        <SEO title="Home" />
        <div className="bg-white flex flex-col text-start md:text-center">
          <h1 className="text-blue-dark font-mont text-3xl py-4">
            <span>Hello, I'm </span>
            <span className="font-merri font-bold">Neelesh</span>
            <span>, a web developer.</span>
          </h1>
          <TechSquares />
          <h2 className="font-mont text-blue-dark text-3xl py-4">
            Let's talk?
          </h2>
        </div>
      </div>
    );
  }
}
