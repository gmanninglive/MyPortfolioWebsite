import React from 'react'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

export default function WebLink ({ url }) {

    return(
        <a href={url} target="_blank" rel="noreferrer">
            <span>
            <FaExternalLinkSquareAlt 
            className="card-links" 
            size={48} />
            </span>
        </a>
    )
}