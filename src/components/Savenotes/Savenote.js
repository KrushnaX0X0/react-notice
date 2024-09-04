import React from 'react'
import "./Savenote.css"


function TitleCase(str){
return str[0].toUpperCase() + str.slice(1);
}


function Notecatagery({ category}){
    const CATEGORY_EMOJI ={
        "shopping":"🛒",
        "work":"👜",
        "personal":"👪",
        "lerning":"📘"
    }
    return(
        <div className='note-card-category'>
          <span className='note-category-emoji'>{CATEGORY_EMOJI[category]}</span>
      {TitleCase (category)}
          
        </div>
    )
}



function Savenote({title,description,category,emoji}) {
  return (
    <div className='note-card'>
      <div className='note-card-emoji'>{emoji}</div>
      <div>
        <h2 className='note-card-title'>{title}</h2>
        <p>{description}</p>
        <Notecatagery category={category}/>
      </div>

    </div>
  )
}

export default Savenote