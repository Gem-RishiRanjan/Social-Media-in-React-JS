import React, { useState, useRef, useEffect } from "react";
import loginPageImage from "../images/pic14.png";
import emailIcon from "../images/pic11.svg";
import passwordIcon from "../images/pic13.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { async } from "@firebase/util";

function Login({}) {
  const [error, setError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
  const emailElement = useRef(null);
  const passwordElement = useRef(null);
  const islogin = false;
  const [storedLogins, setStoredLogins] = useState([]);
  

  var loginIndex = 0;
  
  const usersCollectionRef = collection(db, "loginDetails");

  useEffect(() => {
    const getLogins = async () => {
      onSnapshot(usersCollectionRef, (data) => {
        setStoredLogins(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
    };
    getLogins();
  }, []);

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

  const handlePassword = (passwordElement) => {
    if (!isValidPassword(passwordElement.target.value)) {
      setPasswordError("Password is invalid");
    } else {
      setPasswordError(null);
    }
  };

  const validate = () => {
    if (
      isValidEmail(emailElement.current.value) &&
      isValidPassword(passwordElement.current.value)
    ) {
      if (
        checklogin(emailElement.current.value, passwordElement.current.value)
      ) {
        const filteredId = storedLogins.filter((element) => {
          if (element.email === emailElement.current.value) {
            return true;
          }

          return false;
        });

        
        loginIndex = filteredId[0].loginId;



        localStorage.setItem("islogin", 1);
        localStorage.setItem("userLoggedIn", loginIndex);
        navigate(`/homepage/${loginIndex}`);
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <div className="login1">
      <img className="login2" src={loginPageImage} />

      <div className="login3">
        <br />
        <br />
        <br />
        <div className="login4">
          <img className="login5" src={emailIcon} />

          <input
            className="login6"
            type="email"
            placeholder="Email Address"
            onBlur={handleChange}
            ref={emailElement}
          />
        </div>
        <br />
        {error && <span className="login7">{error}</span>}
        <br />
        <br />

        <div className="login8">
          <img className="login9" src={passwordIcon} />

          <input
            className="login10"
            type="password"
            placeholder="Password"
            onBlur={handlePassword}
            ref={passwordElement}
          />
        </div>
        <br />
        {passwordError && <span className="login7">{passwordError}</span>}
        <br />
        <br />
        <div>
          <button className="login11" onClick={validate}>
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
