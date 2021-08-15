const path = require(`path`)

exports.createPages = async ({ graphql, actions:{ createPage } }) => {
  
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
                createPage({
                path: `/portfolio/${node.slug}`,
                component: path.resolve('src/templates/portfolio-case.js'),
                context: { slug: node.slug} })})

  data.allContentfulBlog.edges.forEach( ({node} ) => {
                createPage({
                path: `/blog/${node.slug}`,
                component: path.resolve('src/templates/blogpost.js'),
                context: { slug: node.slug} })})
};
