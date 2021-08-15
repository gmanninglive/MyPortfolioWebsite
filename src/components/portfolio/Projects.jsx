import React from 'react';

import Project from "./Project";
import './projects.scss'

export default function Projects ({ portfolioCases }) {

    return(
        
        <div className="portfolio-container">  
            <div className="portfolio-title">./Projects</div>
              {portfolioCases.map( ( {node} ) =>  (
                  <div class="portfolio-card-wrapper" key={node.id}>
                      <Project portfolioCase={node} /> 
                     </div>
                 ))}
        </div>
    )
};
