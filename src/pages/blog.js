import React from 'react';
import {Link, graphql } from'gatsby'
import  SyntaxHighlighter  from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';



import Layout from '../layouts/Layout';

const Blogindex = ({ data }) =>  {
    
    const blogPosts = data.allContentfulBlog.edges;

    return(

      <Layout> 
        <div className="blogcard-container">
           <div><h1 className="page-title">Blog</h1></div>
          <div className="blog-post-cards">
                {blogPosts.map( ({ node }) =>  (
                  <div className="single-blog-post" key={node.id}>
                      <div className="summary">
                      <h3>{node.title} <br/>{node.createdAt}</h3>
                      <p>{node.summary}</p>
                      </div>
                 
                      <Link to={`/blog/${node.slug}`} >
                      {node.codeThumbnail? <SyntaxHighlighter className="blogpost-thumbnail" style={a11yLight}
                              language="javascript" 
                              showLineNumbers="true" wrapLongLines="true">
                      
                               {node.codeThumbnail.codeThumbnail }
                            </SyntaxHighlighter> : <div></div> }            
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
          codeThumbnail {
            codeThumbnail
          }
          thumbnail {
            gatsbyImageData(width: 600)
          }
        }
      }
    }
  }`