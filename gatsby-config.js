/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: "Noah Yamamoto",
  },
  plugins: [
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
          }
        ]
      }
    },
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
    "gatsby-plugin-catch-links",
     {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130379672-2",
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Noah Yamamoto's Personal Website",
        short_name: `Noah Yamamoto`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#b200f0`,
        display: `minimal-ui`,
        icon: `static/android-chrome-512x512.png`,
        include_favicon: true,
      }
    },
    `gatsby-plugin-offline`,
  ],
};
