import React from 'react'
import { breakfastLists } from '../breakfastLists'

export default function Breakfast() {
  return (
    <div>
        {breakfastLists.map((breakfastList, index)=>{
                return (
                    <div key={index}>
                          <img src={breakfastList.image} alt=""/>
                          <h1>{breakfastList.title}</h1>
                          <p><a href={breakfastList.url}>{breakfastList.shortDescription}</a></p>
                    </div>
            )
        })}
    </div>
  )
}
