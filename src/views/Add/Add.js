import React from 'react'
import './Add.css'
import Homebtn from '../../components/Homebtn/Homebtn'
import note from '../Home/noties.png'
import Inputcard from '../../components/InputCard/Inputcard';




function Add() {



  return (
    <div>
      <h1 className='text-center web-title'><img src={note} className='img' /> Add Note </h1>
     <div className='input-card-continer'>
       <Inputcard/>

       </div>




      <Homebtn />
    </div>
  )
}

export default Add