import React from 'react'
import './modal.css';
import mainimg from "./mainimg.jpg";

function Modal({showModal}) {
  return (
    // <div>
      <div className='modal-background'>
          <div className='modal-container'>
          
          <img src = {mainimg}  style={{height: "100%", width:"70%"}}/>
          <div className='commentdiv'>
          <span className='coment'><u>Comments</u></span>
              <span className='coment'>Wonderful picture</span><br />
              <span className='coment'>Nice</span><br />
              <span className='coment'>Looks Dangerous</span><br />
              <span className='coment'>Scary !</span><br />
              <span className='coment'>Close encounter</span><br />
          </div>
          <button style={{marginLeft:50, height:30, width: 30, borderRadius:45, backgroundColor:"black",color: "white", border:"none"}} onClick={() => showModal(false)}>X</button>
          </div>    
          
      </div>
    // </div>    

    
  )
}

export default Modal