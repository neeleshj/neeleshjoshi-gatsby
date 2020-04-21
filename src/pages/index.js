import React, { Fragment, Component } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Navbar from "../components/navbar/navbar";

import "../styles/tw.css";

export default class extends Component {
  render() {
    const headerHeight = "104px";
    return (
      <div className="relative">
        <header
          className="w-full p-3"
          style={{ minHeight: `calc(100vh - ${headerHeight}` }}
        >
          <div
            className="w-full bg-blue-primary"
            style={{ minHeight: `calc(100vh - ${headerHeight} ) ` }}
          />
        </header>
        <Navbar />
        <div className="h-screen w-full bg-white">test</div>
      </div>
    );
  }
}
