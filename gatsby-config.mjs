import path from 'path'
import urlJoin from 'url-join'
import { dirname } from "path"
import { fileURLToPath } from "url"
import siteConfig from "./config/site.js"

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  siteMetadata: {
    title: siteConfig.shortname,
    altName: siteConfig.altName,
    author: siteConfig.author,
    description: siteConfig.defaultDescription,
    siteUrl: urlJoin(siteConfig.url, siteConfig.prefix),
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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
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
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.vmarinho.dev`,
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
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-styled-components`,
    `babel-plugin-styled-components`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.defaultTitle,
        short_name: siteConfig.shortname,
        start_url: siteConfig.prefix,
        background_color: siteConfig.backgroundColor,
        theme_color: siteConfig.themeColor,
        display: `fullscreen`,
        icon: `src/images/vm-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-168199555-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-remove-serviceworker`,
  ],
}

export default config;