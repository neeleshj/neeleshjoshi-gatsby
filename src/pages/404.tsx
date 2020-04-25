import React from "react";

import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SEO title="404: Not Found" description="404 - No page here" lang="en" />
      <h1 className="text-blue-dark font-merri text-4xl">
        I am not the page you were looking for.
      </h1>
    </div>
  );
};

export default NotFoundPage;
