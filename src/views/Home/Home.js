import React from 'react'
import './Home.css'
import note from './noties.png'

function Home() {
  return (
    <div>

      <div className='hedding-continer'>

        <h1 className='text-center web-title'> <img src={note} className='img' /> Noties !</h1>
        <h6 className='text-center title-info'>Your pocket friendly note taking app. {" "} 
          <del> Never forget anything anything! </del>{" "}  Remeber everything! 🧠 </h6>
      </div>

      <div>
        {

        }
      </div>

    </div>
  )
}

export default Home