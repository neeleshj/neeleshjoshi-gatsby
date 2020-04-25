import React, { Component, ReactNode } from "react";
import "../styles/global.css";

import anime from "animejs";

import SEO from "../components/seo";
import TechSquares from "../components/techSquares";
import ContactSquares from "../components/contactSquares";

export default class IndexPage extends Component {
  componentDidMount(): void {
    anime({
      targets: ".staggered",
      duration: 1750,
      easing: "easeInOutExpo",
      opacity: [0, 1],
      translateY: ["-10px", "0px"],
      translateX: ["-5px", "0px"],
      delay: anime.stagger(50), // increase delay by 100ms for each elements.
    });
  }

  render(): ReactNode {
    return (
      <div className="w-full h-screen relative px-3 flex flex-col items-center justify-center">
        <SEO title="Home" />
        <div className="bg-white flex flex-col text-start md:text-center">
          <h1 className="text-blue-dark font-mont text-3xl py-4">
            <span className="staggered">Hello, </span>
            <span className="staggered">I'm </span>
            <span className="staggered font-merri font-bold">Neelesh</span>
            <span className="staggered">, a </span>
            <span className="staggered">web </span>
            <span className="staggered">developer.</span>
          </h1>
          <TechSquares />
          <h2 className="font-mont text-blue-dark text-3xl py-4">
            <span className="staggered">Let's </span>
            <span className="staggered">talk?</span>
          </h2>
          <ContactSquares />
        </div>
      </div>
    );
  }
}
