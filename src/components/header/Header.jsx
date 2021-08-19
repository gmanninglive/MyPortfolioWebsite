import React, { useState } from "react";
import Nav  from "../nav/Nav";
import { ThemeContext } from '../../context/ThemeProvider';
import {FaRegLightbulb, FaLightbulb, } from 'react-icons/fa';

import './header.scss';

const Header = ({location}) =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    return(
        <div>
            
        <div className= "headerContainer">
            <div className="nav">
                    <ThemeContext.Consumer>{context => (
                            <button className="theme-select" 
                            href="#" onClick={() => 
                            context.changeTheme()}>
                            {context.isDark ? 
                            <FaRegLightbulb size={36} /> : 
                            <FaLightbulb size={36} />}
                            </button>)}
                    </ThemeContext.Consumer>

                     <Nav isMenuOpen={isMenuOpen} 
                        setIsMenuOpen={setIsMenuOpen} 
                        location={location} />

            </div>
            
        </div>
            
        </div>
    )
}

export default Header;