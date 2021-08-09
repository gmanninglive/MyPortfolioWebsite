import React from 'react';
import {Link, graphql } from'gatsby'
import { GatsbyImage }  from 'gatsby-plugin-image/';


import Layout from '../layouts/Layout';


const Blogindex = ({ data }) =>  {
    
    console.log(data)

    return(

      <Layout>
        <div><p className="text-3xl font-bold text-center py-20">Blog</p></div>
        <div className="flex justify-center ">
          
          <div className="w-full lg:w-1/2 pb-40 flex justify-evenly">
                {data.allContentfulBlog.edges.map( ({ node }) =>  (
                  <div className="w-full  bg-white my-6 hover:shadow-xl rounded-lg flex justify-around " key={node.id}>
                      <div>
                      <p className="text-xl">{node.title}     {node.createdAt}</p>
                      <p>{node.summary}</p>
                      </div>
                      <Link to={`/blog/${node.slug}`}>
                      <GatsbyImage image={node.thumbnail.gatsbyImageData} />
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
            gatsbyImageData(width: 300)
          }
        }
      }
    }
  }`