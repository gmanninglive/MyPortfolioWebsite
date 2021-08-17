import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import './contact.scss';
import GitLink from '../buttons/GitLink'
import Email from '../buttons/Email'


const Contact = () => {
    const   { site: 
            { siteMetadata: { 
                links: { 
                email, 
                github } 
            }, 
        }, 
    } = useStaticQuery(graphql` 
        query{
            site {
              siteMetadata {
                links {
                  email
                  github
                }
              }
        }
    }`
    )
    return(
    <div className="contact-container">
        <div className="contact-title">./Contact</div>
        <div className="contact-details">
            <div className="email">
                <h2>Email</h2>
            <Email url={email} size={48} />
            </div>
            <div className="git">
            <h2>Github</h2>
            <GitLink url={github} size={48} />
            </div>
        </div>
    </div>        
    )
}
export default Contact;