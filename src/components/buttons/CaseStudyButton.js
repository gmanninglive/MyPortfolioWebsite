import React from 'react'
import { Link } from 'gatsby'

export default function CaseStudyButton ({ url }) {

    return(
        
        <button  className="case-button"><Link to={url}>Read full case study
            </Link>
        </button>
        
        
        
    )
}