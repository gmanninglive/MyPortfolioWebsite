import React from 'react';
import {SiJavascript, 
    SiNodeDotJs, 
    SiGatsby, 
    SiNextDotJs, 
    SiReact, SiCsharp,
    } from 'react-icons/si';

import './skills.scss';

const Skills = () => {
    return(
        <div className="skillsContainer">
              <div className="skills-title">
              ./Skills
              </div>
                    <div className="skills-grid">
                      <div className="item-1">
                        <SiNodeDotJs  size={48} /> {/*color="#339933"*/}
                      </div>
                      <div className="item-2">
                        <SiJavascript  size={48} /> {/*color="#F7DF1E"*/}
                      </div>
                      <div className="item-3">
                        <SiReact  size={48} /> {/*color="#61DAFB"*/}
                      </div>
                      <div className="item-4">
                        <SiGatsby  size={48} /> {/*color="#663399"*/}
                      </div>
                      <div className="item-5">
                        <SiNextDotJs size={48} />
                        </div>
                      <div className="item-6">
                        <SiCsharp size={48} />
                        </div>
                  </div>
           </div>
    )
}

export default Skills;