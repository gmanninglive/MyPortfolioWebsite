const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  
  const { data } = await graphql(`
      { allContentfulBlog {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulPortfolio {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)

  data.allContentfulPortfolio.edges.forEach( ({node} ) => {
                actions.createPage({
                path: `/portfolio/${node.slug}`,
                component: path.resolve('src/templates/portfolio-case.js'),
                context: { slug: node.slug} })})

  data.allContentfulBlog.edges.forEach( ({node} ) => {
                actions.createPage({
                path: `/blog/${node.slug}`,
                component: path.resolve('src/templates/blogpost.js'),
                context: { slug: node.slug} })})
};
