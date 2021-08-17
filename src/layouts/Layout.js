import PropTypes from "prop-types"
import React from "react"

import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { ThemeContext } from '../context/ThemeProvider';
import './styles.scss'


const Layout = ({ children, location }) => {
  return (
    <ThemeContext.Consumer>
      {context => (
        <React.Fragment>
            
          <div className={context.isDark ? 'darkTheme' : 'lightTheme'}>
          <div className="layout">
            <Header className="header" location ={location}/>
            
                {children}
                
          
           
            
      
            <Footer />
            
          </div>
         
          </div>
        </React.Fragment>
      )}
    
    </ThemeContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default Layout




   
      
 