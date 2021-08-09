import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby'
import { SiGithub } from 'react-icons/si'


export default function Card ({ portfolioCase }) {
      return (
        <div className= "singleportfoliocard" >
            <div className="summary">
                <h2>{portfolioCase.title}</h2>
                <p class="">{portfolioCase.summary}</p>
                <Link to={portfolioCase.githubUrl}><SiGithub className="card-github" size={48} /></Link>
            </div>
        
            <div className="">
                <Link to={`/portfolio/${portfolioCase.slug}`} >
                <GatsbyImage image={portfolioCase.thumbnail.gatsbyImageData}
                alt={`${portfolioCase.slug}-image`} className="cardImage" />
                </Link>
            </div>

            
        </div>
            

    )

}
