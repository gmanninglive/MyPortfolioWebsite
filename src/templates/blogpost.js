import React from "react";
import { graphql } from 'gatsby';

import Layout from "../layouts/Layout"
import BlogBody from "../components/RichText"

const Template = ({data: { blog }}) => {
  
  const date = blog.createdAt;
  
return (

  <Layout>
    
    <div className="container">
    <h1 className="page-title">Blog</h1>
    <div className="blogpost-container">
    
          <div className="blogtitle">
            <h2>{blog.title}</h2>
              <b>
                {`Post date:${date}`}
              </b>
          </div>
          <div className="blogsection-2"><BlogBody content={blog.body} />
          {/* <SyntaxHighlighter className="code" language="javascript" style={atomDark} showLineNumbers="true" wrapLongLines="true">{blog.codeblock.codeblock}</SyntaxHighlighter> */}
          </div>
                               
          
    </div>
    </div>
  </Layout>
  )
}
export default Template;

export const query = graphql` query($slug: String!) {
  blog: contentfulBlog(slug: {eq: $slug}) {
        contentful_id
       
        title
        createdAt(locale: "en-gb", formatString: "MMM Do YY")
        thumbnail {
          gatsbyImageData
        }
        codeblock{codeblock}
        body {
          raw
    }
   }
  }`
