import React from 'react'
import {mainLists} from "../mainLists"

export default function MainPage() {
  return (
    <div className="MainPage">
              {mainLists.map((mainList, index)=>{
                return (
                    <div key={index}>
                          <img src={mainList.image} alt=""/>
                          <h1>{mainList.title}</h1>
                          <p><a href={mainList.url}>{mainList.shortDescription}</a></p>
                    </div>
            )
        })}
    </div>
  )
}
