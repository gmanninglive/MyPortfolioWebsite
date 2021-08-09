import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"


const Nav = () => {

  const { site } = useStaticQuery(graphql`
    query {
      site {
        data: siteMetadata {
          menu {
            name
            to
          }
        }
      }
    }`)

 
  return (
    
      
    
      <ul >
        <li>
        <Link class="navtext" activeClassName="navtextActive" to="/">Home</Link>
        </li>
      <li><Link class="navtext" activeClassName="navtextActive" to="/about">About</Link></li>
      <li>
      <Link class="navtext" activeClassName="navtextActive" to="/blog">Blog</Link>
      </li>
      </ul>
      
      
      
      







)};
      

export default Nav;
