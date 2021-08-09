import { Link } from "gatsby"
import React from "react"


const Nav = () => {
 
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
