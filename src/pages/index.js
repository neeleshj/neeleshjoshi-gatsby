import React, { Fragment, Component } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Navbar from "../components/navbar/navbar";
import HexagonGrid from "../components/hexa/hexagrid";

import "../styles/tw.css";

export default class extends Component {
  render() {
    const headerHeight = "95px";
    return (
      <Layout>
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
          <div className="h-screen w-full bg-white px-3 py-nav-bar flex flex-col items-center justify-center">
            <div className="text-start">
              <h4 className="font-merri font-bold text-4xl">Hello.</h4>
              <h5 className="font-mont text-3xl">I'm Neelesh.</h5>
              <h5 className="font-mont text-3xl">A web developer.</h5>
              <HexagonGrid />
              <h5 className="font-mont text-3xl">Let's talk?</h5>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
