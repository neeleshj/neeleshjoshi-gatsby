import React, { Fragment, Component } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Navbar from "../components/navbar/navbar";

import "../styles/tw.css";

export default class extends Component {
  render() {
    const headerHeight = "75px";
    return (
      <div className="relative">
        <header
          className="w-full bg-black"
          style={{ minHeight: `calc(100vh - ${headerHeight})` }}
        >
          test
        </header>
        <Navbar />
        <div className="h-screen w-full bg-blue-500">test</div>
        <div className="h-screen w-full bg-blue-500">test</div>
        <div className="h-screen w-full bg-blue-500">test</div>
      </div>
    );
  }
}
