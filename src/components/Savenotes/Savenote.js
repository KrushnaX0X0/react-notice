import React from 'react'
import "./Savenote.css"

function Savenote({title,description,category,emoji}) {
  return (
    <div className='note-card'>
      <div className='note-card-emoji'>{emoji}</div>
      <div>
        <h2 className='note-card-title'>{title}</h2>
        <p>{description}</p>
        <span className='note-card-category'>{category}</span>
      </div>

    </div>
  )
}

export default Savenote