import React from "react";
import Nav  from "../nav/Nav";
import { ThemeContext } from '../../context/ThemeProvider';
import {FaRegLightbulb, FaLightbulb } from 'react-icons/fa';
import './header.scss';

const Header = () =>{
    return(
        <ThemeContext.Consumer>
            {context => (
        <div class= "headerContainer">
            <div className="nav">
                <button className="theme-select" 
                    href="#" onClick={() => 
                    context.changeTheme()}>
                    {context.isDark ? 
                    <FaRegLightbulb size={36} /> : 
                    <FaLightbulb size={36} />}
                    </button>
                    <Nav />
                    </div>
            
        </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default Header;