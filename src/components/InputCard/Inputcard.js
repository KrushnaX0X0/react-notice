
import React, { useState } from 'react'
import './InputCard.css'
import EmojiPicker from 'emoji-picker-react';
import pen from '../../views/Home/quill-pen.png';
import Book from '../../views/Home/book.png';

function Inputcard() {
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    const [category, setcategory] = useState("");
    const [emoji, setemoji] = useState("");
    const [openEmoji,setopenEmoji] = useState(false);
    return (
        <div>
        <div className='input-continer'>
            <input type='text' className='input-text'
                placeholder='Title'
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />

            <input type='text' className='input-text'
                placeholder='Description'
                value={description}
                onChange={(e) => {
                    setdescription(e.target.value);
                }}
            />

            <select className='input-text user-select' value={category} onChange={(e) => { setcategory(e.target.value) }}>
                <option value='shopping'>Shopping</option>
                <option value='work'>Work</option>
                <option value='personal'>Personal</option>
                <option value='lerning'>Lerning</option>
            </select>
                       <div className='emoji-continer input-text' onClick={()=>{setopenEmoji(true)}}>
                       {emoji ? emoji:'Select emoji'}

                       </div>
          
                <EmojiPicker open={openEmoji}
                    height={'300px'}
                    searchDisabled={true}
                    skinTonesDisabled={true}
                    onEmojiClick={(emojiObject)=>{
                        setemoji(emojiObject.emoji)
                        setopenEmoji(false)
                    }}
                    className='input-emoji'
                />
              

            
        </div>
        <div className='btn-continer-add'>
            <button className='btn btn-input btn-fist'> Add note <img src={pen} className='logo'/></button>
            <button className='btn btn-input btn-second'>Show <img src={Book} className='logo'/></button>

        </div>




   </div>
    )
}

export default Inputcard