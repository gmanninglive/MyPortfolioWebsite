import React from "react";
import { graphql } from "gatsby";
import {FiChevronDown } from "react-icons/fi"

import "../styles/global.scss";
import Layout from "../layouts/Layout";
import Projects from "../components/portfolio/Projects";
import Skills from "../components/skills/Skills";
import Contact from "../components/contact/contact";
import SiteMetadata from "../components/SiteMetaData";


const index = ({ data }) => {
  const portfolio = data.allContentfulPortfolio.edges;

  return (
    <Layout >
      <SiteMetadata title="My Portfolio" description="See My latest Software and Web Development Projects, And Check Out My Blog" />
      <div className="index-container" id="one">
        <div className="hero">
          <div className="page-title">./Portfolio</div>
          <span className="intro">
            <h2 id="name">George Manning</h2>
            <h1 id="welcome">Web</h1>
            <h1 id="portfolio">Developer</h1>
          </span>
          <div className="arrows">
            <FiChevronDown size={48} />
          </div>
        </div>
        <div>
          <Projects id="two" portfolioCases={portfolio} />
        </div>
        <Skills />
      </div>
      <div>
        <Contact id="four" />
      </div>
    </Layout>
  );
};
export default index;

export const pageQuery = graphql`
  query homeQuery {
    allContentfulPortfolio(sort: { fields: order }) {
      edges {
        node {
          id
          slug
          title
          summary {
            summary
          }
          thumbnail {
            gatsbyImageData(width: 600)
          }
          githubUrl
          websiteUrl
          order
        }
      }
    }
  }
`;
