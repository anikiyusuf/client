import React from 'react'
import { soupLists  } from '../soupsLists'

export default function SoupPage() {
  return (
    <div  className="SoupPage">

{soupLists.map((soupList, index)=>{
                return (
                    <div key={index}>
                          <img src={soupList.image} alt=""/>
                          <h1>{soupList.title}</h1>
                          <p><a href={soupList.url}>{soupList.shortDescription}</a></p>
                    </div>
            )
        })}
    </div>
  )
}
