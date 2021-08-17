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
    <Layout location={location}><div className="index-container">
           <div className="hero">
           <div className="page-title">./Portfolio</div>
              <span className="intro">
                  <h2 id="name">George Manning</h2>
                  <h1 id="welcome">Web</h1>
                  <h1 id="portfolio">Developer</h1>
              </span>
           </div>

            <Projects portfolioCases={portfolio} />

            <Skills />
            <Contact />
            </div>
    </Layout>
    
  )
};
export default index;

export const pageQuery = graphql` query homeQuery {
   allContentfulPortfolio(sort: { fields: [createdAt], order: DESC }) {
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