import React from 'react'
import fb from './face.png';
import "./homepageheader.css";
import search from "./search.webp";
import request from "./request.png";
import messenger from "./messenger.png";
import bell from "./bell.png";
import drop from "./drop.png";
import {useNavigate} from 'react-router-dom';


function Homepageheader() {
  const navigate = useNavigate();
  return (
    <div className='mainheader'>
        <img src={fb} style={{maxHeight: "25px", marginTop: "8px", marginLeft:"20px"}}  />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input type = "text" style={{maxHeight: "25px", marginTop: "8px", width: "500px", height:"40px", padding:"10px"}} placeholder="Search" />
        <img src={search} style={{maxHeight: "23px", marginTop: "9px", backgroundColor:"ghostwhite"}}  />
        <button
          onClick={()=>navigate('/profile')} 
          style={{color: "white", marginTop:"8px", marginLeft:"200px", fontWeight:"bold", backgroundColor:"transparent", border: "none"}}>Virat</button>
        <button 
        onClick={()=>navigate('/homepage')}
        style={{color: "white", marginTop:"8px", marginLeft:"50px", fontWeight:"bold", backgroundColor:"transparent", border: "none"}}>Home</button>
        <button style={{color: "white", marginTop:"8px", marginLeft:"50px", fontWeight:"bold", backgroundColor:"transparent", border: "none"}}>Find Friends</button>
        <img src={request} style={{maxHeight: "25px", marginTop: "8px", marginLeft:"40px"}}  />
        <img src={messenger} style={{maxHeight: "25px", marginTop: "8px", marginLeft:"40px"}}  />
        <img src={bell} style={{maxHeight: "25px", marginTop: "8px", marginLeft:"40px"}}  />
        <img src={drop} style={{maxHeight: "25px", marginTop: "8px", marginLeft:"40px"}}  />
    </div>
  )
}

export default Homepageheader