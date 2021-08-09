import PropTypes from "prop-types"
import React from "react"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"



const Layout = ({ children }) => {
  return (
    <div className="layout">
            <Header />
            
                <div className="container">{children}</div>
                
          
           
            
      
        <Footer />
            
   </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default Layout