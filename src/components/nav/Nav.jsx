import { Link } from "gatsby"
import React from "react"

export default function Nav() {

    
 
  return (
      <ul >
          <li>
          <Link className="navtext" activeClassName="navtextActive" to="/">Portfolio</Link>
          </li>
          <li>
          <Link className="navtext" activeClassName="navtextActive" to="/blog">Blog</Link>
          </li>
      </ul>

)};
