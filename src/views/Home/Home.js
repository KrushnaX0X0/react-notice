import React from 'react'
import './Home.css'
import note from './noties.png'
import pen from './quill-pen.png'
import book from './book.png'
import privite from "./privacy-settings.png"
import easy from "./correct.png"
import like from "./heart.png"
import Featurescard from "../../components/Featurescard/Featurescard"
import { Link } from 'react-router-dom'

const FEATURES = [
  {
    img: privite,
    info: 'Note Safe'
  },
  {
    img: easy,
    info: "Easy to Us"
  },
  {
    img: like,
    info: "100K"
  }
]


function Home() {
  return (

    <div>

      <div className='hedding-continer'>

        <h1 className='text-center web-title'> <img src={note} className='img' /> Noties <img src={pen} className='title-img'/></h1>
        <h6 className='text-center title-info'> Your friendly reminder app. {" "}
          <del>Quick notes for a busy life! </del>{" "}  <span className='hight-light'>Your friendly reminder app 📘 </span></h6>
      </div>

      <div className='btn-continer'>



       <Link to="/Add"><button className='btn btn-fist'>  Add Note  <img src={pen} className='logo' /></button></Link>
       <Link to="/Show"><button className='btn  btn-second'>  Show   <img src={book} className='logo' /></button></Link>


      </div>
      <div className='features-continer'>

        {
          FEATURES.map(fetures => {
            return (
              <Featurescard
                img={fetures.img}
                info={fetures.info}

              />

            )
          })

        }





      </div>

    </div>
    

  )
}

export default Home