require("dotenv").config()

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

module.exports = {
  siteMetadata: {
      links:{
      email: "gmanningdev@gmail.com",
      github: "https://github.com/gmanninglive/",
      },
      menu:[
        { name: "Home", to: "/" },
        { name: "Blog", to: "/blog" },],
      locale: "en",
      siteUrl: "https://gmanningdev.uk",
      title: "My Portfolio",
      description: "See My latest Software and Web Development Projects, And Check Out My Blog",
      author: "George Manning"
  },
  plugins: [
      `gatsby-plugin-postcss`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sass`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: "gatsby-source-contentful",
        options: {
          accessToken: CONTENTFUL_ACCESS_TOKEN,
          spaceId: CONTENTFUL_SPACE_ID,
        },
      },
        { 
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images/`,
          ignore: [`**/\.*`], // ignore files starting with a dot
        },
        options: {
          name: `portfolio`,
          path: `${__dirname}/src/images/portfolioimg`,
          ignore: [`**/\.*`], // ignore files starting with a dot
        },
     },
     {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`, `Exo 2`,
        ],
        display: 'swap'
      }
    }
  ],
};
