import React, { useState } from 'react';
import cover from "./cover.jpg";
import virat from "./virat.jfif";
import "./profile.css";
import Timeline from './timeline';
import About from './about';
import Friends from './friends';
import Homepageheader from './homepageheader';
import Photos from './photos';

function Profile() {


  const [check, setCheck] = useState('1');
  return (
    
    <div>
    <Homepageheader />
      <div className='profile'>
    
    <div className='image'>
    <img src = {cover} style={{height: "100%", width: "100%"}} />
    <img src = {virat} style={{position:"absolute", left: "16vw", bottom:"20vh", border:"1px solid grey",height: "25%", width: "13%", padding:5, backgroundColor:"white"}} />
    <span style={{position:"absolute", left: "30vw", bottom:"22vh", padding:5, backgroundColor:"transparent", color:"black", fontSize: "50px"}}>Virat Kohli</span>
    <button style = {{position:"absolute", right: "28vw", bottom:"45vh", border:"1px solid grey", fontWeight:"bold", width:"100px"}}>Friends</button>
    <button style = {{position:"absolute", right: "18vw", bottom:"45vh", border:"1px solid grey", fontWeight:"bold", width:"100px"}}>Message</button>
    </div>
    <div className='about'>
        <button className='timeline' onClick = {() => setCheck('1')}>Timeline</button>
        <button className='timeline' onClick = {() => setCheck('2')}> About </button>
        <button className='timeline' onClick = {() => setCheck('3')}>Friends</button>
        <button className='timeline' onClick = {() => setCheck('4')}>Photos</button>
        <button className='timeline'>More</button>
    </div>
    <br />
    <div className='details'>
        
    {(() => {
          switch(check){
            case '1': return <Timeline />
            case '2': return <About />
            case '3': return <Friends />
            case '4': return <Photos />
          }
        })()}
        
        
        {/* {
          about ?
          <About /> :
          <Timeline />
        }

        {
          friends ?
          <Friends /> :
          <Timeline />
        } */}

    </div>
</div>
    </div>
  )
}

export default Profile