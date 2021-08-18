import React from "react"
import { SiReact, SiGatsby, SiNextDotJs } from "react-icons/si"
export default function Frontend(){

    return(
        <div className="skills-card">
            <ul className="">
                      <h2>Frontend</h2>
                      <div className="skills-icons">
                        <SiReact  size={48} /> {/*color="#61DAFB"*/}
                        <SiNextDotJs size={48} />
                        <SiGatsby  size={48} /> {/*color="#663399"*/}
                        </div>
                        <li>
                          React.js
                        </li>
                        <li>
                          Next.js and Gatsby
                        </li>
                        <li>
                          Sass & Tailwindcss
                        </li>
                      </ul>
            
        </div>
    )
}