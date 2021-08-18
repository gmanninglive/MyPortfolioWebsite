import React from 'react';
import { graphql } from 'gatsby';



import '../styles/global.scss'
import Layout from '../layouts/Layout';
import Projects from '../components/portfolio/Projects';
import Skills from '../components/skills/Skills'
import Contact from '../components/contact/contact';


const index = ({ data, location }) =>{
 
  const portfolio = data.allContentfulPortfolio.edges;

  return (
    <Layout location={location}><div className="index-container" id="one">
           <div className="hero">
           <div className="page-title">./Portfolio</div>
              <span className="intro">
                  <h2 id="name">George Manning</h2>
                  <h1 id="welcome">Web</h1>
                  <h1 id="portfolio">Developer</h1>
              </span>
           </div>
            <div>
            <Projects id="two" portfolioCases={portfolio} />
            </div>
            
            <Skills  />
            </div>
            <div>
            <Contact id="four" />
            </div>
    </Layout>
    
  )
};
export default index;

export const pageQuery = graphql` query homeQuery {
   allContentfulPortfolio(sort: {fields: order})  {
    edges {
      node {
        id
        slug
        title
        summary{summary}
        thumbnail {
          gatsbyImageData(width: 600)
        }
        githubUrl
        websiteUrl
        order
      }
    }
  }
}`