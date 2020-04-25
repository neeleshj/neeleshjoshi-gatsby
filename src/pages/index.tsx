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
        <SEO title="N - Home" />
        <div className="bg-white flex flex-col">
          <h1 className="text-blue-dark font-mont text-3xl">
            <span>Hello, I'm </span>
            <span className="font-merri font-bold">Neelesh</span>
            <span>, a web developer.</span>
          </h1>
          <TechSquares />
        </div>
      </div>
    );
  }
}
