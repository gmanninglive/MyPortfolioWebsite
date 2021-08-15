import { Link } from "gatsby"
import React from "react"

export default function Nav() {
 
  return (
      <ul >
          <li>
          <Link class="navtext" activeClassName="navtextActive" to="/">Home</Link>
          </li>
          {/* <li>
            <Link class="navtext" activeClassName="navtextActive" to="/contact">Contact</Link>
          </li> */}
          <li>
          <Link class="navtext" activeClassName="navtextActive" to="/blog">Blog</Link>
          </li>
      </ul>

)};
