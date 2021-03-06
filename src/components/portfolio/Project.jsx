import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

// import CaseStudyButton from '../buttons/CaseStudyButton';
import WebLink from '../buttons/WebLink';
import GitLink from '../buttons/GitLink';


export default function Project ({ portfolioCase }) {
   
      return (
        <div className="portfoliocards">
        <div className="project-number">{portfolioCase.order}</div>
        <div className= "singleportfoliocard" >
            <div className="summary">
                <h2>{portfolioCase.title}</h2>
                    <p>{portfolioCase.summary.summary}</p>
                    <div className="links-container">
                            <GitLink url={portfolioCase.githubUrl} size={48} />
                            {portfolioCase.websiteUrl ? <WebLink 
                            url={portfolioCase.websiteUrl} 
                            />: <div></div>}
                            
                        {/* <CaseStudyButton url={`/portfolio/${portfolioCase.slug}`}/> */}
                    </div>
            </div>
                <div>
                    <a href={portfolioCase.websiteUrl} target="_blank" rel="noreferrer" >
                        <GatsbyImage 
                        image={portfolioCase.thumbnail.gatsbyImageData}
                        alt={`${portfolioCase.slug}-image`}
                        className="cardImage" 
                        />
                    </a>
                </div>
        </div>
        </div>    
    )
}
