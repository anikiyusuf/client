import React from 'react'
import { dessertsLists } from './dessertsList'

export default function  DessertsPage() {
  return (
    <div className="Desserts">

{dessertsLists.map((dessertList, index)=>{
                return (
                    <div key={index}>
                          <img src={dessertList.image} alt=""/>
                          <h1>{dessertList.title}</h1>
                          <p><a href={dessertList.url}>{dessertList.shortDescription}</a></p>
                    </div>
            )
        })}
    </div>
  )
}
