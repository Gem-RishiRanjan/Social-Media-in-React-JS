import React from 'react'
import virat from "./virat.jfif";
import dhoni from "./dhoni.jpg";
import rohit from "./rohit.jfif";
import sky from "./sky.jfif";
import rahul from "./rahul.jfif";
import bum from "./bum.jfif";
import chahal from "./chahal.jfif";
import './friends.css'
function Friends() {
  return (
    
        <div className='friends'>
            <div className='samelinefriends'>
                <div className='friendcard'>
                    <img src= {dhoni} style = {{borderRadius: "80px", width: "125px", height:"125px"}}/>
                    <div style={{display: "flex", flex:1, flexDirection: "column", padding:"10px"}}>
                    <span style ={{fontSize: "25px", fontWeight:"bold"}}> MS Dhoni </span><br /> 
                    <span style ={{fontSize: "20px", color:"blue", fontWeight:"bold"}}> <u>Friends</u> </span>
                    </div>
                </div>

                <div className='friendcard'>
                    <img src= {rohit} style = {{float: "left", borderRadius: "80px", width: "125px", height:"125px"}}/>
                    <div style={{display: "flex", flex:1, flexDirection: "column", padding:"10px"}}>
                     <span style ={{fontSize: "25px", fontWeight:"bold"}}> Rohit Sharma </span><br /> 
                    <span style ={{fontSize: "20px", color:"blue", fontWeight:"bold"}}> <u>Friends</u> </span>                    </div>
                </div>
            </div>
<br />
            <div className='samelinefriends'>
                <div className='friendcard'>
                    <img src= {sky} style = {{borderRadius: "80px", width: "125px", height:"125px"}}/>
                    <div style={{display: "flex", flex:1, flexDirection: "column", padding:"10px"}}>
                    <span style ={{fontSize: "25px", fontWeight:"bold"}}> Surya Kumar Yadav </span><br /> 
                    <span style ={{fontSize: "20px", color:"blue", fontWeight:"bold"}}> <u>Friends</u> </span>
                    </div>
                </div>

                <div className='friendcard'>
                    <img src= {rahul} style = {{float: "left", borderRadius: "80px", width: "125px", height:"125px"}}/>
                    <div style={{display: "flex", flex:1, flexDirection: "column", padding:"10px"}}>
                     <span style ={{fontSize: "25px", fontWeight:"bold"}}> KL Rahul </span><br /> 
                    <span style ={{fontSize: "20px", color:"blue", fontWeight:"bold"}}> <u>Friends</u> </span>                    </div>
                </div>
            </div>
    <br />
            <div className='samelinefriends'>
                <div className='friendcard'>
                    <img src= {bum} style = {{borderRadius: "80px", width: "125px", height:"125px"}}/>
                    <div style={{display: "flex", flex:1, flexDirection: "column", padding:"10px"}}>
                    <span style ={{fontSize: "25px", fontWeight:"bold"}}> Jaspreet Bumrah </span><br /> 
                    <span style ={{fontSize: "20px", color:"blue", fontWeight:"bold"}}> <u>Friends</u> </span>
                    </div>
                </div>

                <div className='friendcard'>
                    <img src= {chahal} style = {{float: "left", borderRadius: "80px", width: "125px", height:"125px"}}/>
                    <div style={{display: "flex", flex:1, flexDirection: "column", padding:"10px"}}>
                     <span style ={{fontSize: "25px", fontWeight:"bold"}}> Yuzvendra Chahal </span><br /> 
                    <span style ={{fontSize: "20px", color:"blue", fontWeight:"bold"}}> <u>Friends</u> </span>                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Friends