import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {SiJavascript, 
        SiNodeDotJs, 
        SiGatsby, 
        SiNextDotJs, 
        SiReact, SiCsharp} from 'react-icons/si';


import '../utils/global.scss';
import Layout from '../layouts/Layout';
import Cards from '../components/portfolio/Cards';


const index = ({ data }) =>{

  // const portfolioCases = data.allContentfulPortfolio;


 
  return (
    <Layout>
      <body>
           <div className="hero">
             <span className="intro">
              <h2>George Manning</h2>
              <h1>Junior Developer</h1>
              <p>Check out my portfolio below 👇</p>
              </span>
              <span className="heroRightBlock">
              </span>
           
           </div>
            <div className="portfolioContainer">
           <Cards portfolioCases={data.allContentfulPortfolio.edges} />
           </div>
           <div className="skillsContainer">
             <div className="skills-title"><h2>Skills & Tech</h2></div>
             <div className="skills-list">
               
               <div className="item-1"><SiNodeDotJs /></div>
               <div className="item-2"><SiJavascript /></div>
               <div className="item-3"><SiReact /></div>
               <div className="item-4"><SiGatsby /></div>
               <div className="item-5"><SiNextDotJs /></div>
               <div className="item-6"><SiCsharp /></div>
             
            </div>
             
           </div>
         
            
      </body>
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
        summary
        thumbnail {
          gatsbyImageData(width: 600)
        }
      }
    }
  }
}`