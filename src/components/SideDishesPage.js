import React from 'react'
import { sideDishesLists } from '../List/sideDishesLists'

export default function SideDishesPage() {
  return (
    <div>
            {sideDishesLists.map((sideDishesList, index)=>{
                return (
                    <div key={index}>
                          <img src={sideDishesList.image} alt=""/>
                          <h1>{sideDishesList.title}</h1>
                          <p><a href={sideDishesList.url}>{sideDishesList.shortDescription}</a></p>
                    </div>
            )
        })}
    </div>
  )
}
