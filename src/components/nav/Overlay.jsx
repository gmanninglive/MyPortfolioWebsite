import React from 'react'
import { Link } from "gatsby"
import { TiTimesOutline } from 'react-icons/ti'

import './styles.scss'

const Overlay = ( props ) => {

    const{ IsMenuOpen, setIsMenuOpen } = props

    return(
        <div className="overlay">
            <div className="mobile-menu">
          <Link className="navtext" activeClassName="navtextActive" to="/" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
         
          <Link className="navtext" activeClassName="navtextActive" to="/blog">Blog</Link>
          </div>
       
            

            <button className="menu-close"
                    href="#" onClick={() => setIsMenuOpen(false)}>
            <TiTimesOutline size={48} />
            </button>
         
        </div>

    )
}

export default Overlay;