import React from 'react';

import { SiGithub } from 'react-icons/si';

export default function GitLink ({ url, size } ) {
    return(
        <a href={url} target="_blank" rel="noreferrer">
            <span>
            <SiGithub className="card-links" 
            size={size} />
            </span>
        </a>
    )
}