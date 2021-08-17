import React from 'react';
import {HiOutlineMail} from 'react-icons/hi'


export default function Email({url, size}) {
    return(
        <a href={`mailto:${url}`} alt="email" ><span><HiOutlineMail size={size} /></span></a>
            
    )
}