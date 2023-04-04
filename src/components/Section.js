import React from "react"
import { sectionLists } from "../List/sectionLists"
import "./sass/Section.scss"
// import { Link } from "react-router-dom"

export default  function Section(){
    return (
        <div className="section">
        {sectionLists.map((sectionList, index) => {
                return (
                    <div key={index} className="section-card">
                          <img src={sectionList.image} alt="" className="images"/>
                          <h3>{sectionList.title}</h3>
                          <p><a href={sectionList.url} target="_blank" rel="noopener noreferrer">{sectionList.shortDescription}</a></p>
                         {/* <p><Link   to={{pathname:sectionList.url}}>{sectionList.shortDescription}</Link></p> */}
                    </div>
            )
        })}
        

        </div>
    )
}