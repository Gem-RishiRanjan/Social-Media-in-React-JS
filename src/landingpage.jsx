import './App.css';
import Signup from './components/signup';
import Login from './components/login';
// import vrimg from './vrimg.jfif';
import React, {useState} from 'react';
import Homepage from './components/homepage';



function Landingpage(){

  // if(!islogin){
    const [show, setShow] = useState(true);

    // const [islogin, setLogin] = useState(true);

    // const loginCheck = (logindone) =>{
    //   setLogin(logindone);

    // }
    localStorage.setItem("isloggedin", false);
  
    return (


      <div>
        {show? <Login />:<Signup />}
          {/* islogin ? */}
         {/* {show ? <Login />:<Signup />} */}
        {/* // loginCheck = {loginCheck} */}
        <center>
        <button onClick={() => setShow(true)} style={{marginTop:"5px",fontSize:"25px", color:"#039dfc", backgroundColor:"transparent", border:"none"}}><b>Login</b></button>
        <button onClick={() => setShow(false)} style={{fontSize:"25px", color:"#039dfc", backgroundColor:"transparent", border:"none"}}><b>Signup</b></button>
        </center>
      </div>
 

    );
  
  // }
}
export default Landingpage;
