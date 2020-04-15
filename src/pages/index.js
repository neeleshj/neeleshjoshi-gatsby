import React from "react"
import Helmet from "react-helmet"
import "../styles/global.css"

const IndexPage = () => (
  <div className="w-full">
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Montserrat:wght@300;400&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <div>Game</div>
    <div>Header</div>
    <div>Main Content</div>
  </div>
)

export default IndexPage
