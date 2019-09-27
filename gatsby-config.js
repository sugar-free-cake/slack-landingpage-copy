module.exports = {
  siteMetadata: {
    title: `Slack`,
    titleTemplate: "Where work happens | %s",
    description: `Where work happens`,
    url: "", // No trailing slash allowed!
    image: "/images/favicon-32.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-polished`,
  ],
}
