import React from 'react';

import Backend from './Backend';
import Deployment from './Deployment';
import Frontend from './Frontend';

import './skills.scss';

const Skills = () => {
    return(
        <div className="skills-container">
              <div className="skills-title">
              ./Skills
              </div><div className="skills-description">
                        <div className="skills-text">
                          <h5>
                            I have been diving into the latest tools & tech. Here's a short list of what I have been learning and working with recently
                          </h5>
                    </div>
                    <div className="card-wrapper">
                      <Frontend />
                      <Backend />
                      <Deployment />
                      </div>
                      <div className="skills-text">
                        <p>
                          I am really enjoying the functionality and re-usability of React components, coupled with the speed of the JAMstack/ serverless architectures.
                          <br/><br/>
                          I plan to gain more experience with cloud platforms over the coming months.
                        </p>
                    </div>
                  </div>
                </div>
                  
         
    )
}

export default Skills;