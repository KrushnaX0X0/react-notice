import React from 'react'
import './Show.css'
import book from '../Home/book.png'
import Homebtn from '../../components/Homebtn/Homebtn'

function Show() {
  return (
    <div>
          <h1 className='text-center web-title'> <img src={book} className='img' /> Show Note </h1>
          <Homebtn/>
    </div>
  )
}

export default Show