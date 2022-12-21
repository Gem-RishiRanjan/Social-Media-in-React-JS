{/* <div className="body">
<div>
    <button onClick={() => showModal(true)}>
    <img src = {mainimg}  style={{height:"400px", marginTop:"10px"}}/></button>
    <div>
    <span>
    <br />
    <img src = {like} style ={{height:"30px", borderRadius:"25px", backgroundColor:"blue", padding:"5px"}} />
    &nbsp;&nbsp;<u>Virat Kohli and {count} others</u>
    </span>
    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <u>{comm.length} &nbsp;comments</u></span>
    <br />
    
    <div style={{backgroundColor:"white"}}>
    <button style={{border:"none" , width:"150px", height:"50px",backgroundColor:"white"}} onClick={increase}>
    <img src = {like2} style ={{height:"30px"}} />Like
    </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick = {() => setCommod(!commod)}  style={{border:"none" , width:"150px", height:"50px",backgroundColor:"white"}}>
    <img src = {comment} style ={{height:"30px", marginRight:"2px"}} />Comment
    </button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button style={{border:"none" , width:"150px", height:"50px" ,backgroundColor:"white"}}>
    <img src = {share} style ={{height:"30px"}} />Share 
    </button>
    </div>
    
    </div>
</div>
{
    commod ?
        <div style={{width:"87%", borderRadius:"4px"}}>
            <input 
                type = "text"
                placeholder="Name"
                ref = {nameElement}
                style={{
                    paddingLeft:"20px",
                    fontWeight:"bold",
                    color :"blue",
                    border:"0.5px solid grey",
                    borderRadius:"20px",
                    height:"50px",
                    width:"40%"
                }}
            />
            <br />
            <input 
                type = "text"
                placeholder="Comment"
                ref = {commentElement}
                style={{
                    paddingLeft:"30px", 
                    marginTop:"5px",
                    border:"0.5px solid grey",
                    borderRadius:"20px",
                    height:"50px",
                    width:"70%"

                    
                }}
            />      
            <button 
                style={{
                        border:"0.5px solid grey",
                        margin:"10px",
                        padding:"13px",
                        fontWeight:"bold",
                        borderRadius:"20px"   
                    }}
                onClick={finalize}>
                Comment
            </button>  
        </div>
    :
        <div>
            
        </div>
}
<div style={{width:"87%", borderRadius:"4px"}}>{listItems}</div>


    
</div> */}




import './App.css';
import Signup from './components/signup';
import Login from './components/login';
import React, {useState} from 'react';




function Landingpage(){


    const [show, setShow] = useState(true);


    return (


      <div>

        <div style={{float:"right", marginRight:"20%", marginTop:"3%"}}>
        
        {
          show ?
          <button onClick={() => setShow(true)} style={{marginTop:"5px",fontSize:"25px", color:"#0b2fe6", backgroundColor:"transparent", border:"none"}}><b>Login</b></button>
          :
          <button onClick={() => setShow(true)} style={{marginTop:"5px",fontSize:"25px", color:"#8596ed", backgroundColor:"transparent", border:"none"}}><b>Login</b></button>
        }
        
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


        {
          show?
          <button onClick={() => setShow(false)} style={{fontSize:"25px", color:"#8596ed", backgroundColor:"transparent", border:"none"}}><b>Signup</b></button>
          :
          <button onClick={() => setShow(false)} style={{fontSize:"25px", color:"#0b2fe6", backgroundColor:"transparent", border:"none"}}><b>Signup</b></button>
        }

        
        </div>
        {show? <Login />:<Signup />}
      </div>
 

    );
  

}
export default Landingpage;
