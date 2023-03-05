import React from 'react'
// import NavBar from './NavBar'
// import Section from './Section'
// import Footer from "./Footer"
import Nomayo from './Section/Nomayo'

function HomePage(){
    return(
        <header>
          <div className="nav-area">
         <Nomayo/>
            {/* <NavBar/>
            <Section/>
            <Footer/> */}
          </div>
        </header>
       
    )
}


export default HomePage