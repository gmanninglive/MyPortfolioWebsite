import React from 'react';
import { graphql } from 'gatsby';

import {SiJavascript, 
        SiNodeDotJs, 
        SiGatsby, 
        SiNextDotJs, 
        SiReact, SiCsharp,
        } from 'react-icons/si';


import '../utils/global.scss';
import Layout from '../layouts/Layout';
import Cards from '../components/portfolio/Cards';
import Person from '../components/person/personcoding';


const index = ({ data }) =>{
 
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
              <div className="case-study-container">
              <h1 className="casestudytext3">PORTFOLIO</h1>
                <h1 className="casestudytext2">CASE STUDIES</h1>
                <h1 className="casestudytext">CASE STUDIES</h1>
                <h1 className="casestudytext4">CASE STUDIES</h1>
                
            </div><div className="portfoliocards-container">
           <Cards portfolioCases={data.allContentfulPortfolio.edges} />
           </div></div>

           <div className="skillsContainer">
             <div className="skills-title">
               <h2>Skills & Tech</h2>
                </div>
                  <div className="skills-grid">
                      <div className="item-1"><SiNodeDotJs color="#339933" size={48} /></div>
                      <div className="item-2"><SiJavascript color="#F7DF1E" size={48} /></div>
                      <div className="item-3"><SiReact color="#61DAFB" size={48} /></div>
                      <div className="item-4"><SiGatsby color="#663399" size={48} /></div>
                      <div className="item-5"><SiNextDotJs size={48} /></div>
                      <div className="item-6"><SiCsharp size={48} /></div><div className="person">
                <Person  />
                </div>
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
        githubUrl
        websiteUrl
      }
    }
  }
}`