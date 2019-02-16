module.exports = {
    siteMetadata: {
      title: `blog super dad`,
      description: `Description from siteMetadata`
    },
    plugins: [
      `gatsby-transformer-remark`,
      `gatsby-plugin-postcss`,
      `gatsby-plugin-sass`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `${__dirname}/src/pages`
        },
      },
    ],
  }