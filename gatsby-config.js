const path = require('path')
const urljoin = require("url-join")
const siteConfig = require("./config/site")

module.exports = {
  siteMetadata: {
    title: siteConfig.shortname,
    altName: siteConfig.altName,
    author: siteConfig.author,
    description: siteConfig.defaultDescription,
    siteUrl: urljoin(siteConfig.url, siteConfig.prefix),
  },
  
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1460,
              withWebp: true,
              showCaptions: false,
              quality: 90,
              wrapperStyle: `margin: 7vw 0;`,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
        '@components': path.join(__dirname, 'src/components'),
        '@styles': path.join(__dirname, 'src/styles'),
        config: path.join(__dirname, 'config'),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `babel-plugin-styled-components`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.name,
        short_name: siteConfig.shortname,
        start_url: siteConfig.prefix,
        background_color: `#ffffff`,
        theme_color: `#0c66c0`,
        display: `minimal-ui`,
        icon: `src/images/vm-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
