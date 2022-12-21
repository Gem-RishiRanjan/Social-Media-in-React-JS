import React, {useState, useRef} from "react";
import validator from "validator";
import ReactDOM from "react-dom";
import "./style.css";
import pic4 from "./pic9.svg";
import pic7 from "./pic10.svg"
import {Routes, Route, useNavigate} from 'react-router-dom';



function Outerbox(){

    // const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [passerror, setPassError] = useState(null);
    // const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    const emailElement = useRef(null);
    const passElement = useRef(null);
    const navigate = useNavigate();
    
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

    const validate = () =>{
        if(isValidEmail(emailElement.current.value) && isValidPassword(passElement.current.value)){
            navigate('/homepage');
        }
    }
    return(
        <div>
            <div class="outerbox">
                
               &nbsp;
                    <img class = "logoimg"src = {pic4} alt="icon" />
                    <input 
                    class ="logoinput" 
                    type = "email" 
                    placeholder="email" 
                    onChange = {handleChange} 
                    ref = {emailElement}

                    />
                    <br />&nbsp;
                    {error && <span style={{color: 'red', fontWeight: 'bold', fontSize: "15px", fontFamily: "cursive"}}>{error}</span>}
                    <br />
                    
            </div>
            <br />

            <div class="outerbox">
            &nbsp;
                    <img class = "logoimg"src = {pic7} alt="icon" />
                    <input 
                    class ="logoinput" 
                    type = "password" 
                    placeholder="password"  
                    onChange = {handlePassword} 
                    ref = {passElement}   
                    />
                    {passerror && <span style={{color: 'red', fontWeight: 'bold', fontSize: "15px", fontFamily: "cursive"}}>{passerror}</span>}
             
            </div>
            <div><br />
                <button  class = "loginbutton" onClick={validate}>LOGIN</button>
            </div>
        </div>
    );
}


export default Outerbox;
