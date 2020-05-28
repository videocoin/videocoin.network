module.exports = {
  siteMetadata: {
    title: `VideoCoin Network`,
    description: `The VideoCoin Network is a powerful API-first, decentralized video platform that utilizes untapped computing resources to save you money.`,
    url: 'https://videocoin.network',
    image: '/images/vc.jpg',
    twitterUsername: '@VideoCoinHQ',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src:
          'https://cdn.jsdelivr.net/npm/indigo-player@1/lib/indigo-player.js',
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Videocoin`,
        short_name: `videocoin`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
