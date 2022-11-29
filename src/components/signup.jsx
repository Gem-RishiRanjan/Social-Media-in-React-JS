import React,  {useState, useRef}from "react";
import ReactDOM from "react-dom";
import pic1 from "./pic14.png";
import pic2 from "./pic9.svg";
import pic3 from "./pic11.svg";
import pic4 from "./pic12.svg";
import pic5 from "./pic13.svg";
import "./style.css";
import {useNavigate} from 'react-router-dom';

function Signup(){

    const [error, setError] = useState(null);
    const [phoneerror, setPhoneError] = useState(null);
    const [passerror, setPassError] = useState(null);
    const [confirmpasserror, setConfirmPassError] = useState(null);
    const navigate = useNavigate();
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    const validPhone = new RegExp('[1-9][0-9]{7,14}$');
    const emailElement = useRef(null);
    const passElement = useRef(null);
    const phoneElement = useRef(null);
    const confirmpassElement = useRef(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    
    function isValidPassword(password) {
        return validPassword.test(password);
    }

    function isValidPhone(phone){
        return validPhone.test(phone);
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

    const handleConfirmPassword = confirmpassElement => {
        if (isValidPassword(passElement.current.value) != isValidPassword(confirmpassElement.target.value)) {
          setConfirmPassError('Passwords do not match');
        } else {
          setConfirmPassError(null);
        }
    }


    const handlePhone = phoneElement => {
        if (!isValidPhone(phoneElement.target.value)) {
          setPhoneError('Phone is invalid');
        } else {
          setPhoneError(null);
        }
    }

    const validate = () =>{
        if(isValidEmail(emailElement.current.value) 
            && isValidPassword(passElement.current.value) 
            && isValidPhone(phoneElement.current.value)
            && isValidPassword(confirmpassElement.current.value)
        ){
            navigate('/homepage');
        }
    }


    return(
        <div style={{margin:"auto" ,width:"80%"}}>
            <img src={pic1} style={{float:"left" , height:"80%", width:"50%", marginTop:"5%"}} />
            <div style={{float:"right" , height:"80%", width:"40%", marginTop:"8%"}}>
            {/* <div style={{ fontSize:"40px", color:"#039dfc"}}>
                <b><center>Signup</center></b>
            </div> */}
            <br /><br /><br />
                
                <div style={{float:"left", width:"45%",height:"40px", borderStyle:"solid", borderColor:"grey", borderWidth:"2px"}}>
                    <img src={pic2} style={{height:"83%", width:"6%", float:"left", marginLeft:"9%", marginTop:"1%"}} />&nbsp;&nbsp;&nbsp;
                    <input 
                    type = "text" 
                    placeholder="First Name" 
                    style={{height:"80%", width:"75%", border:"none", marginTop:"1%"}} />                    
                </div>
                
                <div style={{float:"right", width:"45%",height:"40px", borderStyle:"solid", borderColor:"grey", borderWidth:"2px"}}>
                    <img src={pic2} style={{height:"83%", width:"6%", float:"left", marginLeft:"9%", marginTop:"1%"}} />&nbsp;&nbsp;&nbsp;
                    <input type = "text" placeholder="Last Name" style={{height:"80%", width:"75%", border:"none", marginTop:"1%"}} />
                </div><br /><br /><br /><br />
                
                <div style={{width:"99%", height:"40px", float:"left", borderStyle:"solid", borderColor:"grey", borderWidth:"2px"}}>
                    <img src={pic3} style={{height:"50%", width:"5%", float:"left", marginLeft:"3%", marginTop:"2%"}} /> &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type = "email" 
                    placeholder="Email Address" 
                    onBlur={handleChange}
                    ref = {emailElement}
                    style={{height:"20px", width:"75%", marginTop:"10px", border:"none"}} /> 
                </div>
                <br />
                {error && <span style={{color: 'red', fontWeight: 'bold', fontSize: "15px", fontFamily: "cursive"}}>{error}</span>}
                <br /><br /><br />


                <div style={{width:"99%", height:"40px", float:"left", borderStyle:"solid", borderColor:"grey", borderWidth:"2px"}}>
                    <img src={pic4} style={{height:"50%", width:"5%", float:"left", marginLeft:"3%", marginTop:"2%"}} /> &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type = "text" 
                    placeholder="Phone number" 
                    onBlur={handlePhone}
                    ref = {phoneElement}
                    style={{height:"20px", width:"75%", marginTop:"10px", border:"none"}} /> 
                </div><br />
                {phoneerror && <span style={{color: 'red', fontWeight: 'bold', fontSize: "15px", fontFamily: "cursive"}}>{phoneerror}</span>}
                <br /><br /><br />
                

                <div style={{float:"left", width:"45%",height:"40px", borderStyle:"solid", borderColor:"grey", borderWidth:"2px"}}>
                    <img src={pic5} style={{height:"83%", width:"6%", float:"left", marginLeft:"9%", marginTop:"1%"}} />&nbsp;&nbsp;&nbsp;
                    <input type = "password" 
                    placeholder="Password" 
                    onBlur={handlePassword}
                    ref = {passElement}
                    style={{height:"80%", width:"75%", border:"none", marginTop:"1%"}} />                    
                </div>
                
                <div style={{float:"right", width:"45%",height:"40px", borderStyle:"solid", borderColor:"grey", borderWidth:"2px"}}>
                    <img src={pic5} style={{height:"83%", width:"6%", float:"left", marginLeft:"9%", marginTop:"1%"}} />&nbsp;&nbsp;&nbsp;
                    <input type = "password" 
                    placeholder="Confirm Password" 
                    onChange={handleConfirmPassword}
                    ref = {confirmpassElement}
                    style={{height:"80%", width:"75%", border:"none", marginTop:"1%"}} />
                </div><br />
                {passerror && <span style={{color: 'red', fontWeight: 'bold', fontSize: "15px", fontFamily: "cursive"}}>{passerror}</span>}
                {confirmpasserror && <span style={{color: 'red',marginLeft:"55%",  fontWeight: 'bold', fontSize: "15px", fontFamily: "cursive"}}>{confirmpasserror}</span>}<br /><br /><br />

                <div>
                    <button onClick={validate} style={{width:"100%", height:"40px", float:"left", borderStyle:"solid", borderColor:"grey", borderWidth:"2px", backgroundColor:"darkgrey", borderRadius:"5px"}}>
                        Create your account
                    </button>
                </div>
                <br /><br /><br /><br />
                <div>
                    <hr style={{width:"47%", float:"left", marginTop:"2.3%"}}/>
                    OR
                    <hr style={{width:"47%", float:"right", marginTop:"2.3%"}}/>
                </div><br /><br /><br />

                <div>
                    <button style={{width:"100%", height:"40px", float:"left", borderStyle:"solid", borderColor:"#031994", borderWidth:"2px", borderRadius:"5px", backgroundColor:"#031994", color:"white"}}>
                        Continue with Facebook
                    </button>
                </div>
                <br /><br /><br />
                <div>
                    <button  style={{width:"100%", height:"40px", float:"left", borderStyle:"solid", borderColor:"#039dfc", borderWidth:"2px", color:"white", borderRadius:"5px",backgroundColor:"#039dfc", borderRadius:"5px"}}>
                        Continue with Twitter
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Signup;