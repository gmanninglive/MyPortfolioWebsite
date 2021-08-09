import React from 'react';
import { graphql } from 'gatsby'
 
import RichText from '../components/RichText';
import Layout from '../layouts/Layout';

const About =({ data }) => {

    const about = data.allContentfulAbout.edges[0].node;

    return(
        
    <Layout>
      
            <div className="Abouthero">
                <div className="intro">
                    <h1>{about.title}</h1>
                    <RichText content={about.body} />
                </div>
                <div className="about-right-block">

                </div>
                
            </div>

    </Layout>
        
    )
};

export default About;

export const Query = graphql` {
    allContentfulAbout {
        edges {
          node {
            body {
              raw
            }
            title
            id
            }
        }
    }
}`