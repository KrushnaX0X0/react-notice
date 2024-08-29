import React from 'react'
import './Card.css'

function Card({img,info}) {





  return (
    <div>                   
        <div><img src={img}/></div>
        <p>{info}</p>

    </div>
  )
}

export default Card