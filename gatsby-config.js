require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `VideoCoin Network`,
    description: `The VideoCoin Network is a powerful API-first, decentralized video platform that utilizes untapped computing resources to save you money.`,
    url: 'https://videocoin.network',
    image: '/images/vc.jpg',
    twitterUsername: '@VideoCoinHQ',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://cdn.jsdelivr.net/npm/indigo-player@1/lib/indigo-player.js',
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Videocoin`,
        short_name: `videocoin`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
        include_favicon: false,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_TRACKING_ID, // Google Analytics / GA
          process.env.AW_TRACKING_ID, // Google Ads / Adwords / AW
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
