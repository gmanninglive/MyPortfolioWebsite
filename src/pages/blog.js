import React from 'react';
import {Link, graphql } from'gatsby'
import { GatsbyImage }  from 'gatsby-plugin-image/';


import Layout from '../layouts/Layout';


const Blogindex = ({ data }) =>  {
    
    console.log(data)

    return(

      <Layout>
        
          
        <div className="blog-post-container">
        <div><h1 className="blog-title">Blog</h1></div>
          <div className="blog-post-cards">
                {data.allContentfulBlog.edges.map( ({ node }) =>  (
                  <div className="single-blog-post" key={node.id}>
                      <div className="summary">
                      <p>{node.title}     {node.createdAt}</p>
                      <p>{node.summary}</p>
                      </div>
                      <Link to={`/blog/${node.slug}`}>
                      <GatsbyImage image={node.thumbnail.gatsbyImageData} className="blog-image" />
                      </Link>
                      
                      
            
                     </div>
                 ))}

          </div>




        </div>
        </Layout>
    )
};

export default Blogindex;

export const pageQuery = graphql` query blogQuery {
    allContentfulBlog(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          slug
          createdAt(locale: "en-gb", formatString: "MMM Do YY")
          title
          summary
          thumbnail {
            gatsbyImageData(width: 600)
          }
        }
      }
    }
  }`