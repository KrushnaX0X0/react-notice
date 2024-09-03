import React, { useEffect, useState } from 'react'
import './Show.css'
import book from '../Home/book.png'
import Homebtn from '../../components/Homebtn/Homebtn'
import { json } from 'react-router-dom';
import Savenote from '../../components/Savenotes/Savenote';

function Show() {

  const [notes,setnotes]= useState([]);

  useEffect(()=>{
    const savenotes = JSON.parse(localStorage.getItem("noties")) || [];
   setnotes(savenotes);
  },[])
  return (
    <div>
          <h1 className='text-center web-title'> <img src={book} className='img' /> Show Note </h1>
          {
            notes.map((note)=>{ 
              const{title,description,category,emoji} = note;
              return(
             <Savenote
             title={title}
             description={description}
             category={category}
             emoji={emoji}
             />
              )
            })
          }


          <Homebtn/>
    </div>
  )
}

export default Show