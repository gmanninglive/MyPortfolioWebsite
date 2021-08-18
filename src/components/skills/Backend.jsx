import React from "react"
import { SiNodeDotJs, SiJavascript, SiGraphql } from "react-icons/si"
export default function Backend(){

    return(
        <div className="skills-card">
            <ul className="" >
            <h2>Backend</h2>
            <div className="skills-icons">
                        <SiNodeDotJs  size={48} /> {/*color="#339933"*/}
                        <SiJavascript  size={48} /> {/*color="#F7DF1E"*/}
                        <SiGraphql size={48} />
                        </div>
  
                        <li>
                          Node.js
                        </li>
                        <li>
                          GraphQL and RESTful API's
                        </li>
                        <li>
                        Javascript ES6+
                      </li>
                      </ul>
            
        </div>
    )
}