import { Link } from "gatsby"
import React from "react"
import { TiThMenuOutline } from 'react-icons/ti'

import Overlay from './Overlay'


export default function Nav(props) {
    const { isMenuOpen, setIsMenuOpen } = props
   

    
 
  return (
      <div>
      {isMenuOpen? <Overlay setIsMenuOpen={setIsMenuOpen} /> : 
                    <button className="menu-button"
                    href="#" onClick={() => setIsMenuOpen(true)}>
                    <TiThMenuOutline size={36} />
                    </button>  }
      

      <ul className="desktop-menu">
          <li>
          <Link className="navtext" activeClassName="navtextActive" to="/">Portfolio</Link>
          </li>
          <li>
          <Link className="navtext" activeClassName="navtextActive" to="/blog">Blog</Link>
          </li>
      </ul>
      
      </div>

)};
