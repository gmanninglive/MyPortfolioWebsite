import React from 'react';

import { SiGithub } from 'react-icons/si';

export default function GitLink ({ url }) {

    return(
        <a href={url} >
            <SiGithub className="card-links" 
            size={48} />
        </a>
    )
}