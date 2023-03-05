import React from 'react'
import { saladLists } from '../saladLists'

export default function SaladPage() {
  return (
    <div className="Salad">
          {saladLists.map((saladList, index)=>{
                return (
                    <div key={index}>
                          <img src={saladList.image} alt=""/>
                          <h1>{saladList.title}</h1>
                          <p><a href={saladList.url}>{saladList.shortDescription}</a></p>
                    </div>
            )
        })}

    </div>
  )
}
