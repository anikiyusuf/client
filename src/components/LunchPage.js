import React from 'react'
import { lunchLists } from '../lunchLists'

export default function LunchPage() {
  return (
    <div className="Lunch">

{lunchLists.map((lunchList, index)=>{
                return (
                    <div key={index}>
                          <img src={lunchList.image} alt=""/>
                          <h1>{lunchList.title}</h1>
                          <p><a href={lunchList.url}>{lunchList.shortDescription}</a></p>
                    </div>
            )
        })}
    </div>
  )
}
