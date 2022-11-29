import React,  {useState, useRef}from "react";
import ReactDOM from "react-dom";
import pic1 from "./pic14.png";
import pic2 from "./pic9.svg";
import pic3 from "./pic11.svg";
import pic4 from "./pic12.svg";
import pic5 from "./pic13.svg";
import "./style.css";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";

function Login({}){

    const [error, setError] = useState(null);
    const [passerror, setPassError] = useState(null);
    const navigate = useNavigate();
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    const emailElement = useRef(null);
    const passElement = useRef(null);
    const islogin = false;

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    
    function isValidPassword(password) {
        return validPassword.test(password);
    }



    const handleChange = emailElement => {
        if (!isValidEmail(emailElement.target.value)) {
          setError('Email is invalid');
        } else {
          setError(null);
        }
    }

    const handlePassword = passElement => {
        if (!isValidPassword(passElement.target.value)) {
          setPassError('Password is invalid');
        } else {
          setPassError(null);
        }
    }

    // const checklogin = () => {
    //     setLogin(islogin);
    // }


    const validate = () =>{
        if(isValidEmail(emailElement.current.value) 
            && isValidPassword(passElement.current.value) 
        ){
            localStorage.setItem("islogin", true);
           navigate('/homepage');
            
        }
    }


    return(
        

        <div style={{margin:"auto" ,width:"80%"}}>
            <img src={pic1} style={{float:"left" , height:"80%", width:"50%", marginTop:"5%"}} />
            
            <div style={{float:"right" , height:"80%", width:"40%", marginTop:"8%"}}>

            <br /><br /><br /><br /><br /><br />
                <div style={{width:"99%", height:"40px", float:"left", borderStyle:"solid", borderColor:"grey", borderWidth:"2px"}}>
                    <img src={pic3} style={{height:"50%", width:"5%", float:"left", marginLeft:"2%", marginTop:"1.5%"}} /> &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type = "email" 
                    placeholder="Email Address" 
                    onBlur={handleChange}
                    ref = {emailElement}
                    style={{height:"20px", width:"75%", marginTop:"10px", border:"none"}} /> 
                </div>
                <br />
                {error && <span style={{color: 'red', fontWeight: 'bold', fontSize: "15px", fontFamily: "cursive"}}>{error}</span>}
                <br /><br /><br />
                

                <div style={{float:"left", width:"100%",height:"40px", borderStyle:"solid", borderColor:"grey", borderWidth:"2px"}}>
                    <img src={pic5} style={{height:"55%", width:"6%", float:"left", marginLeft:"2%", marginTop:"1.3%"}} />&nbsp;&nbsp;&nbsp;
                    <input type = "password" 
                    placeholder="Password" 
                    onBlur={handlePassword}
                    ref = {passElement}
                    style={{height:"80%", width:"75%", border:"none", marginTop:"1%"}} />                    
                </div><br />
                {passerror && <span style={{color: 'red', fontWeight: 'bold', fontSize: "15px", fontFamily: "cursive"}}>{passerror}</span>}
                <br /><br /><br />
                <div>
                    <button onClick={validate} style={{width:"100%", height:"40px", float:"left", borderStyle:"solid", borderColor:"grey", borderWidth:"2px", backgroundColor:"darkgrey", borderRadius:"5px"}}>
                        Login
                    </button>
                </div>
                <br /><br /><br /><br />

                <div>
                <span style={{float:"left", fontSize:"20px"}}>
                    <i><Link class="forgotspan" to="/resetpassword">Forgot password?</Link></i>
                
                </span>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span  style={{float:"right", fontSize:"20px"}}>
            <Link  class="signupspan" to="/signup">Signup</Link>
            </span>
                </div>


            </div>
        </div>
    );
    
}

export default Login;
// export {islogin};
