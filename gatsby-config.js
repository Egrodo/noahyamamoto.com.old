/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: "Noah Yamamoto",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-catch-links",
     {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130379672-2",
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#b200f0`,
        // Disable the loading spinner.
        showSpinner: false,
    },
  },
  ],
};
