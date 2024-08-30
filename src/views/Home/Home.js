import React from 'react'
import './Home.css'
import note from './noties.png'
import pen from './quill-pen.png'
import book from './book.png'

function Home() {
  return (
    <div>

      <div className='hedding-continer'>

        <h1 className='text-center web-title'> <img src={note} className='img' /> Noties !</h1>
        <h6 className='text-center title-info'> Your friendly reminder app. {" "} 
          <del>Quick notes for a busy life! </del>{" "}  <span className='hight-light'>Your friendly reminder app 📘 </span></h6>
      </div>

      <div className='btn-continer'>
        
        
        
        <button className='btn btn-fist'>  Add Note  <img src= {pen} className='logo'/></button>
        <button className='btn  btn-second'>  Show   <img src= {book} className='logo'/></button>


      </div>

    </div>
  )
}

export default Home