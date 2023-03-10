import React from 'react'
import NavBar from './NavBar'
import Section from './Section'
import Footer from "./Footer"


function HomePage(){
    return(
        <header>
          <div className="nav-area">
     
            <NavBar/>
            <Section/>
            <Footer/>
          </div>
        </header>
       
    )
}


export default HomePage