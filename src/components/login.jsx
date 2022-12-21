import React, { useState, useRef, useEffect } from "react";
import pic1 from "./pic14.png";
import pic3 from "./pic11.svg";
import pic5 from "./pic13.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {db} from './firebase';
import { collection, getDocs, setDoc, doc, addDoc, updateDoc, deleteDoc, onSnapshot } from "firebase/firestore"; 


function Login({}) {
  // const storedLogins = JSON.parse(localStorage.getItem("loginDetails"));
  // console.log(storedLogins);

  const [error, setError] = useState(null);
  const [passerror, setPassError] = useState(null);
  const navigate = useNavigate();
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
  const emailElement = useRef(null);
  const passElement = useRef(null);
  const islogin = false;
  const [storedLogins, setStoredLogins] = useState([]);

  var loginIndex = 0;

  const usersCollectionRef = collection(db, "loginDetails");

  useEffect(() => {

    const getLogins = async() =>{
      onSnapshot((usersCollectionRef),(data) =>{
        setStoredLogins(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      })
    } 
    getLogins()
},[])
// console.log(storedLogins);

  function isValidEmail(email) {
    const filteredEmail = storedLogins.filter((element) => {
      if (element.email === email) {
        return true;
      }

      return false;
    });
    if (filteredEmail.length > 0) return true;
    else return false;
  }

  function isValidPassword(password) {
    const filteredPassword = storedLogins.filter((element) => {
      if (element.password === password) {
        return true;
      }

      return false;
    });
    if (filteredPassword.length > 0) return true;
    else return false;
  }

  function checklogin(email, password) {
    const indexEmail = storedLogins.findIndex((element) => {
      if (element.email === email) {
        return true;
      }

      return false;
    });

    const indexPassword = storedLogins.findIndex((element) => {
      if (element.password === password) {
        return true;
      }

      return false;
    });

    if (indexEmail == indexPassword) return true;
    else return false;
  }

  const handleChange = (emailElement) => {
    if (!isValidEmail(emailElement.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }
  };

  const handlePassword = (passElement) => {
    if (!isValidPassword(passElement.target.value)) {
      setPassError("Password is invalid");
    } else {
      setPassError(null);
    }
  };

  const validate = () => {
    if (
      isValidEmail(emailElement.current.value) &&
      isValidPassword(passElement.current.value)
    ) {
      if (checklogin(emailElement.current.value, passElement.current.value)) {
        const filteredId = storedLogins.filter((element) => {
          if (element.email === emailElement.current.value) {
            return true;
          }

          return false;
        });

        loginIndex = filteredId[0].loginId;
        // console.log(filteredId[0].loginId);

        localStorage.setItem("islogin", 1);
        navigate(`/homepage/${loginIndex}`);
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <div style={{ margin: "auto", width: "80%" }}>
      <img
        src={pic1}
        style={{ float: "left", height: "80%", width: "50%", marginTop: "5%" }}
      />

      <div style={{ float: "right", height: "80%", width: "40%" }}>
        <br />
        <br />
        <br />
        <div
          style={{
            width: "99%",
            height: "40px",
            float: "left",
            borderStyle: "solid",
            borderColor: "grey",
            borderWidth: "2px",
          }}
        >
          <img
            src={pic3}
            style={{
              height: "50%",
              width: "5%",
              float: "left",
              marginLeft: "2%",
              marginTop: "1.5%",
            }}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="email"
            placeholder="Email Address"
            onBlur={handleChange}
            ref={emailElement}
            style={{
              height: "20px",
              width: "75%",
              marginTop: "10px",
              border: "none",
            }}
          />
        </div>
        <br />
        {error && (
          <span
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "15px",
              fontFamily: "cursive",
            }}
          >
            {error}
          </span>
        )}
        <br />
        <br />

        <div
          style={{
            float: "left",
            width: "100%",
            height: "40px",
            borderStyle: "solid",
            borderColor: "grey",
            borderWidth: "2px",
          }}
        >
          <img
            src={pic5}
            style={{
              height: "55%",
              width: "6%",
              float: "left",
              marginLeft: "2%",
              marginTop: "1.3%",
            }}
          />
          &nbsp;&nbsp;&nbsp;
          <input
            type="password"
            placeholder="Password"
            onBlur={handlePassword}
            ref={passElement}
            style={{
              height: "80%",
              width: "75%",
              border: "none",
              marginTop: "1%",
            }}
          />
        </div>
        <br />
        {passerror && (
          <span
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "15px",
              fontFamily: "cursive",
            }}
          >
            {passerror}
          </span>
        )}
        <br />
        <br />
        <div>
          <button
            onClick={validate}
            style={{
              width: "100%",
              height: "40px",
              float: "left",
              borderStyle: "solid",
              borderColor: "darkgrey",
              borderWidth: "2px",
              backgroundColor: "lightgrey",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Login
          </button>
        </div>
        <br />
        <br />

        <div>
          <span style={{ float: "right", fontSize: "20px" }}>
            <Link class="forgotspan" to="/resetpassword">
              Forgot password?
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
