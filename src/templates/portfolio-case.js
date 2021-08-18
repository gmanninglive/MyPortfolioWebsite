import React from "react";
import { graphql } from 'gatsby';

import Layout from "../layouts/Layout"
import RichText from "../components/RichText"

const Template = ({data: { portfolio }}) => {
return (

  <Layout>
    <div className="container">
      <h1 className="page-title">./Portfolio</h1>
          <h1>{portfolio.title}</h1>
            <div className="flex justify-between">
              {/* <p className= "text-xl font-semibold">{portfolio.summary}</p> */}

                  </div>
                    <div className= "container flex justify-center py-6"> 
                      {/* <GatsbyImage image={portfolio.thumbnail.gatsbyImageData} alt="image" /> */}
                        </div>
                        {portfolio.body? <RichText content={portfolio.body} />
                        :
                        <div></div>}
                        
    </div>
  </Layout>
  )
}
export default Template;

export const query = graphql` query($slug: String!) {
  portfolio: contentfulPortfolio (slug: {eq: $slug}) {
        contentful_id
        title
        thumbnail {
          gatsbyImageData
        }
        body {
          raw
    }
   }
  }`
