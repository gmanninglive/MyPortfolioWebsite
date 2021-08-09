import React from "react";
import { graphql } from 'gatsby';
import Layout from "../layouts/Layout"
import { GatsbyImage } from "gatsby-plugin-image";
import BlogBody from "../components/RichText"



const Template = ({data: { blog }}) => {
  
  const date = blog.createdAt;
  
return (

  <Layout>
    <div className="py-6">
          <div className="text-4xl font-extrabold py-2">{blog.title}</div>
            <div className="flex justify-between">
              {/* <p className= "text-xl font-semibold">{blog.summary}</p> */}
                <p className= "font-semibold">{`Post date:${date}`}</p>
                  </div>
                    <div className= "container flex justify-center py-6"> 
                      <GatsbyImage image={blog.thumbnail.gatsbyImageData} alt="image" />
                        </div>
                        <BlogBody content={blog.body} />
                        
                        
            
        
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
        body {
          raw
    }
   }
  }`
