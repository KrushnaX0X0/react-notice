import React from 'react'
import './Home.css'
import note from './noties.png'

function Home() {
  return (
    <div>

        <div className='hedding-continer'>

        <h1 className='text-center web-title'> <img src={note} className='img'/> Noties  App</h1>
        </div>

    </div>
  )
}

export default Home