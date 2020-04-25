module.exports = {
  siteMetadata: {
    title: `Neelesh Joshi`,
    description: ``,
    author: `@neeleshj`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Neelesh`,
        short_name: `N`,
        start_url: `/`,
        background_color: `#1B98E0`,
        theme_color: `#1B98E0`,
        display: `minimal-ui`,
        icon: `src/images/Icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Merriweather",
            variants: ["400", "700"],
          },
          {
            family: "Montserrat",
            variants: ["400", "700"],
          },
        ],
      },
    },
  ],
};
