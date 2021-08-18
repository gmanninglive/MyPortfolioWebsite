import React from "react"
import { SiNetlify, SiAmazonaws, SiGit } from "react-icons/si"

export default function Deployment(){

    return(
        <div className="skills-card">
            <ul className="" >
                <h2>Deployment</h2>
                    <div className="skills-icons">
                      <SiNetlify size={48} />
                      <SiAmazonaws size={48} />
                      <SiGit size={48} />
                    </div>
                        <li>
                          Netlify, Vercel and Heroku 
                        </li>
                          <li>
                             AWS
                          </li>
                        <li>
                          Git
                        </li>
                      </ul>
            
        </div>
    )
}